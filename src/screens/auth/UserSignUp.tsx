import { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
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
import { auth, db } from "../../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import { doc, setDoc } from "firebase/firestore";

const UserSignUp = () => {
  const navigation = useNavigation();

  const schema = yup
    .object({
      ID: yup
        .string()
        .required("*Student Id is required.")
        .min(4, "Student Id must be atleast 4 characters."),

      Email: yup
        .string()
        .email("Please enter a valid email")
        .required("*Email is required."),

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

  const onSignUp = async (data: data) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.Email,
        data.Password
      );

      // Save role in firestore

      const uid = userCredentials.user.uid;
      await setDoc(doc(db, "users", uid), {
        email: data.Email,
        role: "student",
        id: data.ID,
      });
      Alert.alert("User account created.");
      navigation.navigate("BottomTab2");
      return userCredentials.user;
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "The email address is invalid.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "The password is too weak.";
      } else {
        errorMessage = "An error occurred during sign-up.";
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
      <AppText style={styles.text}>Student Sign Up</AppText>
      <View style={{ paddingTop: s(40) }}>
        <CustomFieldControl
          name="ID"
          control={control}
          placeholder="Enter Student Id"
        />
        <CustomFieldControl
          name="Email"
          control={control}
          placeholder="Enter Email"
        />
        <CustomFieldControl
          name="Password"
          control={control}
          placeholder="Enter Password"
        />
      </View>
      <Buttons title="Create New Account" onPress={handleSubmit(onSignUp)} />
      <Buttons
        title="Go To Sign In"
        onPress={() => navigation.navigate("UserLogin")}
      />
    </ImageBackground>
  );
};
export default UserSignUp;
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
