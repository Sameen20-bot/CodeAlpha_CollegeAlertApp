import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { AppColors } from "../../styles/colors";

const EmptyDisplayAdmin = () => {
  return (
    <View style={styles.container}>
      <Feather name="bell" size={50} color={AppColors.cyan} />
    </View>
  );
};

export default EmptyDisplayAdmin;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
