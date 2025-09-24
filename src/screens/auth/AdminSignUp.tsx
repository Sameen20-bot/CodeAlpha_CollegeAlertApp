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

const AdminSignUp = () => {
  const navigation = useNavigation();

  const schema = yup
    .object({
      ID: yup
        .string()
        .required("*Admin Id is required.")
        .min(4, "Admin Id must be atleast 4 characters."),

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

  const onSignUp = () => {
    navigation.navigate("BottomTab");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <AppText style={styles.title}>Campus Notify</AppText>
      <AppText style={styles.text}>Admin Sign Up</AppText>
      <View style={{ paddingTop: s(40) }}>
        <CustomFieldControl
          name="ID"
          control={control}
          placeholder="Enter Admin Id"
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
        onPress={() => navigation.navigate("AdminLogin")}
      />
    </ImageBackground>
  );
};

export default AdminSignUp;

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
