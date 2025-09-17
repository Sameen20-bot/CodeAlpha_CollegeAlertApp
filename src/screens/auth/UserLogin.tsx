import { useState } from "react";
import { s, vs } from "react-native-size-matters";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomField from "../../components/inputs/CustomField";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import Buttons from "../../components/buttons/Buttons";
import { FONTS } from "../../styles/fontt";
import { useNavigation } from "@react-navigation/native";

const UserLogin = () => {
  
  const navigation = useNavigation();

  const [data, setData] = useState({
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
      <AppText style={styles.text}>Student Sign in</AppText>
      <View style={{ paddingTop: s(80) }}>
        <CustomField
          secure={false}
          placeholder={"Enter Student Id"}
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
      <Buttons title="Login" onPress={()=>{}}/>
      <Buttons title="Sign Up" onPress={()=>navigation.navigate("UserSignUp")}/>
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
