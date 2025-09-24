import { s, vs } from "react-native-size-matters";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomField from "../../components/inputs/CustomField";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import Buttons from "../../components/buttons/Buttons";
import { FONTS } from "../../styles/fontt";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomFieldControl from "../../components/inputs/CustomFieldControl";

const UserLogin = () => {
  const navigation = useNavigation();

  const schema = yup
    .object({
      ID: yup
        .string()
        .required("*Student Id is required.")
        .min(4, "Student Id must be atleast 4 characters."),

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

  const onLogIn = () => {
    navigation.navigate("BottomTab2");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <AppText style={styles.title}>Campus Notify</AppText>
      <AppText style={styles.text}>Student Sign in</AppText>
      <View style={{ paddingTop: s(80) }}>
        <CustomFieldControl
          name="ID"
          control={control}
          placeholder="Enter Student Id"
        />
        <CustomFieldControl
          name="Password"
          control={control}
          placeholder="Enter Password"
        />
      </View>
      <Buttons title="Login" onPress={handleSubmit(onLogIn)} />
      <Buttons
        title="Sign Up"
        onPress={() => navigation.navigate("UserSignUp")}
      />
    </ImageBackground>
  );
};

export default UserLogin;

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
    fontWeight: "700",
    fontFamily: FONTS.Bold,
  },
});
