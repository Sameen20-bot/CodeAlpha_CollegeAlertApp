import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CustomField from "../../components/inputs/CustomField";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import { FONTS } from "../../styles/fontt";
import Buttons from "../../components/buttons/Buttons";
import { useNavigation } from "@react-navigation/native";

const UserSignUp = () => {
  const navigation = useNavigation();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (names: string, values: any) => {
    setData({ ...data, [names]: values });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <AppText style={styles.title}>Campus Notify</AppText>
      <AppText style={styles.text}>Student Sign Up</AppText>
      <View style={{ paddingTop: s(80) }}>
        <CustomField
          secure={false}
          placeholder={"Enter Student Id"}
          value={data.name}
          onChangeText={(text: string) => handleInput("name", text)}
        />
        <CustomField
          secure={false}
          placeholder={"Enter Student Email"}
          value={data.email}
          onChangeText={(text: string) => handleInput("email", text)}
        />
        <CustomField
          secure={true}
          placeholder={"Enter Password"}
          value={data.password}
          onChangeText={(text: string) => handleInput("password", text)}
        />
      </View>
      <Buttons title="Create New Account" onPress={() => {}} />
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
