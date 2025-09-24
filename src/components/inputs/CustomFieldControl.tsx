import { Control, Controller, FieldValue, FieldValues, Path } from "react-hook-form";
import { StyleSheet } from "react-native";
import { AppColors } from "../../styles/colors";
import { vs, s } from "react-native-size-matters";
import AppText from "../texts/AppText";
import CustomField from "./CustomField";
import { FONTS } from "../../styles/fontt";

interface CustomFieldControlTypes<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeholder: string;
  keyboardType?: "default" | "numeric" | "email-address";
  secureTextEntry?: boolean;
}

const CustomFieldControl= <T extends FieldValues>  ({
  control,
  name,
  rules,
  placeholder,
  keyboardType,
  secureTextEntry,
}: CustomFieldControlTypes<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <CustomField
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secure={secureTextEntry}
            // style={error && styles.errorInput}
          />
          {error && <AppText style={styles.errorText}>{error.message}</AppText>}
        </>
      )}
    />
  );
};

export default CustomFieldControl;

const styles = StyleSheet.create({
  // errorInput: {
  //   borderColor: AppColors.red,
  //   borderWidth: s(1),
  // },
  errorText: {
    color: AppColors.red,
    fontSize: s(13),
    textAlign: "center",
    marginBottom: vs(10),
    marginTop: vs(-5),
    fontFamily: FONTS.Medium
  },
});
