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
import { FlatList, Pressable } from "react-native-gesture-handler";
import { useState } from "react";
import Event from "../../components/Events/Event";
import { events } from "../../data/events";

const EventDisplay = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      {/* Title Container */}
      <View style={styles.titleContainer}>
        <Feather name="list" size={30} color={AppColors.cyan} />
        <AppText style={styles.headTitle}>Events</AppText>
      </View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Event
            title={item.title}
            detail={item.description}
            tag={item.category}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};

export default EventDisplay;

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
});
