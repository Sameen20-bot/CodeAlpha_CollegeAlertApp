import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { FC } from "react";
import { Shadow } from "react-native-shadow-2";

interface AddButtonTypes {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const AddButton: FC<AddButtonTypes> = ({ onPress, style }) => {
  return (
    <Shadow
      distance={10}
      startColor={AppColors.cyan}
      containerStyle={{
        position: "relative",
        bottom: -430,
      }}
    >
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <AntDesign name="plus" size={50} color={AppColors.bgBlue} />
      </TouchableOpacity>
    </Shadow>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.cyan,
    alignItems: "center",
    justifyContent: "center",
    height: s(80),
    width: s(80),
    borderRadius: s(45),
    borderColor: AppColors.bgBlue,
    borderWidth: s(4),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: s(0), height: s(2) },
  },
});
