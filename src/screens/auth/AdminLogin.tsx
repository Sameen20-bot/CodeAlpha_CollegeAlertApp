import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CustomField from "../../components/CustomField";
import ButtonLogin from "../../components/ButtonLogin";

const AdminLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (names: string, values: any) => {
    setData({ ...data, [names]: values });
  };

  return (
    <ImageBackground
      source={require("../../assets/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <Text style={styles.title}>Campus Notify</Text>
      <Text style={styles.text}>Admin Sign in</Text>
      <View style={{paddingTop: s(80)}}>
        <CustomField
          secure={false}
          placeholder={"Enter Admin Id"}
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
      <ButtonLogin/>
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
    color: "#00BFFF",
    fontSize: s(40),
    fontWeight: '900',
  },
  text: {
    paddingTop: s(10),
    color: "#BB86FC",
    fontSize: s(25),
    fontWeight: '700',
  },
});
