import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { AppColors } from "../../styles/colors";

const EmptyDisplayStudent = () => {
  return (
    <View style={styles.container}>
      <Feather name="bell" size={50} color={AppColors.purple} />
    </View>
  );
};

export default EmptyDisplayStudent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
