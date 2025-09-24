import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CustomField from "../../components/inputs/CustomField";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import { FONTS } from "../../styles/fontt";
import Buttons from "../../components/buttons/Buttons";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomFieldControl from "../../components/inputs/CustomFieldControl";
import { signInWithEmailAndPassword } from "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { auth, db } from "../../configs/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/UserSlice";

const AdminLogin = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const schema = yup
    .object({
      Email: yup
        .string()
        .email("Please enter a valid email.")
        .required("*Email Id is required."),

      Password: yup
        .string()
        .required("*Password is required.")
        .min(6, "Password must be atleast 6 characters."),
    })
    .required();

  type data = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onLogIn = async (data: FormData) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.Email,
        data.Password
      );

      // Fetch user role from Firestore

      const uid = userCredentials.user.uid;
      const userDoc = await getDoc(doc(db, "users1", uid));

      const role = userDoc.data().role;

      if (role !== "admin") {
        showMessage({
          type: "danger",
          message: "Only students can log in here",
        });
        return;
      }

      navigation.navigate("BottomTab");

      const userDataObj = {
        uid: userCredentials.user.uid,
      };
      dispatch(setUserData(userDataObj));
    } catch (error: any) {
      let errorMessage = "";
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Wrong email or password";
      } else {
        errorMessage = "An error occurred during sign-in";
      }
      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <AppText style={styles.title}>Campus Notify</AppText>
      <AppText style={styles.text}>Admin Sign in</AppText>
      <View style={{ paddingTop: s(80) }}>
        <CustomFieldControl
          name="Email"
          control={control}
          placeholder="Enter Admin Email"
        />
        <CustomFieldControl
          name="Password"
          control={control}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>
      <Buttons title="Login" onPress={handleSubmit(onLogIn)} />
      <Buttons
        title="Sign Up"
        onPress={() => navigation.navigate("AdminSignUp")}
      />
    </ImageBackground>
  );
};
export default AdminLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    paddingTop: s(100),
    color: AppColors.cyan,
    fontSize: s(40),
    fontFamily: FONTS.Bold,
  },
  text: {
    paddingTop: s(10),
    color: AppColors.purple,
    fontSize: s(25),
    fontFamily: FONTS.Bold,
  },
});
