import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Shadow } from "react-native-shadow-2";
import AppText from "../texts/AppText";
import { FONTS } from "../../styles/fontt";
import { AppColors } from "../../styles/colors";
import { FC } from "react";

interface ButtonsTypes{
  title: string,
  onPress: ()=> void
}

const Buttons: FC<ButtonsTypes> = ({ title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Shadow
        distance={10}
        startColor="rgba(0,191,255,0.6)"
        style={{
          borderRadius: s(16),
          width: s(200),
          height: s(50),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppText style={styles.text}>
          {title}
        </AppText>
      </Shadow>
    </TouchableOpacity>
  );
};
export default Buttons;
const styles = StyleSheet.create({
  container: {
    marginTop: s(20),
    backgroundColor: AppColors.cyan,
    width: s(200),
    height: s(50),
    borderRadius: s(16),
    borderColor: AppColors.cyan,
    borderWidth: s(1),
  },
  text: {
    fontSize: s(18),
    color: AppColors.bgBlue,
    fontFamily: FONTS.Bold,
  },
});
