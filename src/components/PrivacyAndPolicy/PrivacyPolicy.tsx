import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { FONTS } from "../../styles/fontt";

const PrivacyPolicy = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <View style={styles.inner}>
        <Text style={styles.header}>Privacy Policy</Text>

        <ScrollView style={styles.card}>
          <Text style={styles.paragraph}>
            At College Alert, your privacy is our top priority. We collect only
            the information necessary to provide timely notifications about
            college events, announcements, and alerts.
          </Text>
          <Text style={styles.paragraph}>
            We may collect your name, email address, and device information to
            ensure you receive personalized alerts and updates from your
            college or department.
          </Text>
          <Text style={styles.paragraph}>
            All data is stored securely and is never shared with third parties
            without your explicit consent. This helps us maintain a safe and
            trustworthy environment for all students.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default PrivacyPolicy;

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
    paddingVertical: vs(20),
  },
  header: {
    fontSize: s(26),
    fontFamily: FONTS.Bold,
    color: AppColors.white,
    marginBottom: vs(20),
    textAlign: "center",
  },
  card: {
    width: "100%",
    borderRadius: s(18),
    borderWidth: 1,
    borderColor: AppColors.cyan,
    backgroundColor: AppColors.black + "70",
    padding: s(15),
  },
  paragraph: {
    fontSize: s(14),
    fontFamily: FONTS.Medium,
    color: AppColors.white,
    marginBottom: vs(12),
    lineHeight: vs(20),
  },
});
