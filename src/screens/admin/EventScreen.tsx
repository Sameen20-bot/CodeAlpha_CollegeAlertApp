import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { Shadow } from "react-native-shadow-2";
import AppText from "../../components/texts/AppText";
import { FONTS } from "../../styles/fontt";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native-gesture-handler";
import AddButton from "../../components/buttons/AddButton";

const EventScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      {/* Title Container */}
      <View style={styles.titleContainer}>
        <Feather name="list" size={30} color={AppColors.cyan} />
        <AppText style={styles.headTitle}>Manage Events</AppText>
      </View>
      {/* Event Component */}
      <Shadow
        distance={12}
        startColor={AppColors.cyan}
        containerStyle={{
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
        }}
      >
        <View style={styles.eventContainer}>
          {/* Details Container */}
          <View style={styles.detailContainer}>
            <View style={styles.detailHead}>
              <AppText style={styles.title}>Tech Conference 2024</AppText>
              <View style={styles.tag}>
                <AppText style={styles.tagText}>Exam</AppText>
              </View>
            </View>
            <AppText style={styles.text} numberOfLines={2}>
              Annual technology conference featuring latest innovations
            </AppText>
            <AppText style={styles.date}>📅 2025-12-15</AppText>
          </View>
          {/* Delete Container */}
          <View style={styles.deleteContainer}>
            <TouchableOpacity style={styles.dltButton}>
              <MaterialCommunityIcons
                name="delete"
                size={24}
                color={AppColors.red}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Shadow>
      {/* Add Button */}
      <View style={styles.addContainer}>
        <AddButton onPress={() => {}}/>
      </View>
    </ImageBackground>
  );
};

export default EventScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    marginTop: s(30),
    marginStart: s(20),
    marginBottom: s(30),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headTitle: {
    color: AppColors.white,
    fontFamily: FONTS.Bold,
    fontSize: s(22),
    marginStart: s(10),
  },
  eventContainer: {
    width: s(320),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: s(115),
    borderRadius: s(16),
    borderColor: AppColors.cyan,
    borderWidth: s(1),
    paddingHorizontal: s(12),
    backgroundColor: AppColors.black + "90",
  },
  detailContainer: {
    flex: 0.8,
    marginRight: s(8),
  },
  detailHead: {
    flexDirection: "row",
  },
  tag: {
    backgroundColor: AppColors.cyan + "75",
    borderRadius: s(10),
    borderColor: AppColors.cyan,
    borderWidth: 1,
    marginLeft: s(10),
    width: s(50),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: s(3),
    paddingVertical: s(1),
  },
  tagText: {
    color: AppColors.cyan,
    fontFamily: FONTS.Medium,
  },
  deleteContainer: {
    width: s(40),
    alignItems: "center",
    justifyContent: "center",
    marginRight: s(10),
  },
  dltButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(11),
    height: s(40),
    width: s(40),
    backgroundColor: AppColors.red + "60",
    borderColor: AppColors.red,
    borderWidth: 1,
  },
  title: {
    fontFamily: FONTS.Bold,
    color: AppColors.white,
    fontSize: s(15),
  },
  text: {
    fontFamily: FONTS.Medium,
    color: AppColors.white,
    fontSize: s(14),
  },
  date: {
    marginTop: s(5),
    fontFamily: FONTS.Medium,
    color: AppColors.white,
    fontSize: s(14),
  },
  addContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  
});
