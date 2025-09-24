import { FC } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";

interface CustomFieldTypes {
  placeholder: string;
  secure?: boolean;
  value: string;
  keyboardType?: "default" | "numeric" | "email-address";
  onChangeText: (text: string) => void;
  style?: TextStyle;
}

const CustomField: FC<CustomFieldTypes> = ({
  placeholder,
  secure,
  value,
  onChangeText,
  keyboardType,
  style,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#999999"}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        style={[styles.textInput, style]}
        keyboardType={keyboardType}
      />
    </TouchableOpacity>
  );
};
export default CustomField;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: s(300),
    height: vs(50),
    // backgroundColor: "red",
    marginBottom: s(20),
    borderBottomColor: "rgba(255,255,255,0.3)",
    borderBottomWidth: s(0.3),
  },
  textInput: {
    fontSize: s(17),
    fontWeight: "500",
    color: "white",
    marginStart: s(5),
  },
});
