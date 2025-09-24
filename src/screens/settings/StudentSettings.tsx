import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { FONTS } from "../../styles/fontt";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const StudentSettings = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <View style={styles.inner}>
        {/* Header */}
        <Text style={styles.header}>⚙ Settings</Text>

        {/* Card with Options */}
        <View style={styles.card}>
          {/* Privacy Policy */}
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            <MaterialIcons
              name="privacy-tip"
              size={22}
              color={AppColors.cyan}
            />
            <Text style={styles.optionText}>Privacy Policy</Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={[styles.option, styles.logout]}
            onPress={() => navigation.replace("UserOrAdmin")}
          >
            <AntDesign name="logout" size={22} color={AppColors.red} />
            <Text style={[styles.optionText, { color: AppColors.red }]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StudentSettings;

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
  inner: {
    width: "85%",
    alignItems: "center",
  },
  header: {
    fontSize: s(26),
    fontFamily: FONTS.Bold,
    color: AppColors.white,
    marginBottom: vs(25),
    textAlign: "center",
  },
  card: {
    width: "100%",
    borderRadius: s(18),
    borderWidth: 1,
    borderColor: AppColors.cyan,
    backgroundColor: AppColors.black + "70",
    overflow: "hidden",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: vs(14),
    paddingHorizontal: s(15),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.cyan + "40",
  },
  optionText: {
    marginLeft: s(12),
    fontSize: s(16),
    fontFamily: FONTS.Medium,
    color: AppColors.white,
  },
  logout: {
    borderBottomWidth: 0,
    backgroundColor: AppColors.red + "15",
  },
});
