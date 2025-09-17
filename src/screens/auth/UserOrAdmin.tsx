import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppColors } from "../../styles/colors";
import { FONTS } from "../../styles/fontt";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { Ionicons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

const UserOrAdmin = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <AppText style={styles.title}>Campus Notify</AppText>
      {/* Student Option */}
      <Shadow distance={10} startColor={AppColors.purple}>
        <TouchableOpacity style={styles.studentContainer} onPress={()=>navigation.navigate('UserLogin')}>
          <Ionicons name="person" color={AppColors.purple} size={s(50)} />
          <AppText style={styles.stdText}>Student</AppText>
        </TouchableOpacity>
      </Shadow>
      {/* Admin Option */}
      <Shadow distance={10} startColor={AppColors.cyan}>
        <TouchableOpacity style={styles.adminContainer} onPress={()=>navigation.navigate('AdminLogin')}>
          <Ionicons name="settings" color={AppColors.cyan} size={s(50)} />
          <AppText style={styles.admText}>Admin</AppText>
        </TouchableOpacity>
      </Shadow>
    </ImageBackground>
  );
};
export default UserOrAdmin;
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
    paddingTop: s(70),
    color: AppColors.cyan,
    fontSize: s(40),
    fontFamily: FONTS.Bold,
    marginBottom: s(30),
  },
  studentContainer: {
    height: s(200),
    width: s(200),
    borderRadius: s(50),
    borderColor: AppColors.purple,
    borderWidth: s(1),
    marginBottom: s(40),
    alignItems: "center",
    justifyContent: "center",
  },
  adminContainer: {
    height: s(200),
    width: s(200),
    borderRadius: s(50),
    borderColor: AppColors.cyan,
    borderWidth: s(1),
    alignItems: "center",
    justifyContent: "center",
  },
  stdText: {
    color: AppColors.purple,
    marginTop: s(7),
    fontSize: s(21),
    fontFamily: FONTS.Bold,
  },
  admText: {
    color: AppColors.cyan,
    marginTop: s(7),
    fontSize: s(21),
    fontFamily: FONTS.Bold,
  },
});
