import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Shadow } from "react-native-shadow-2";

const ButtonLogin = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Shadow
        distance={7}
        startColor="rgba(0,191,255,0.6)"
        style={{
          borderRadius: s(16),
          width: s(200),
          height: s(50),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.text}>Login</Text>
      </Shadow>
    </TouchableOpacity>
  );
};
export default ButtonLogin;
const styles = StyleSheet.create({
  container: {
    marginTop: s(50),
    backgroundColor: "#00BFFF",
    width: s(200),
    height: s(50),
    borderRadius: s(16),
  },
  text: {
    fontSize: s(18),
    color: "#050124",
    fontWeight: "500",
  },
});
