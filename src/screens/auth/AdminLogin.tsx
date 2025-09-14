import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const AdminLogin = () => {
  return (
    <ImageBackground
      source={require("../../assets/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <Text style={styles.title}>Campus Notify</Text>
      <Text style={styles.text}>Admin Sign in</Text>
    </ImageBackground>
  );
};
export default AdminLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    color: "#00BFFF",
    fontSize: s(35),
  },
  text:{
    color: '#BB86FC',
  }
});
