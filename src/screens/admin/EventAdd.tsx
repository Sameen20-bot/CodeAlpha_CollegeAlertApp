import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CustomField from "../../components/inputs/CustomField";
import { AppColors } from "../../styles/colors";
import { FONTS } from "../../styles/fontt";
import Buttons from "../../components/buttons/Buttons";

interface EventAddProps {
  onPressClose: () => void;
}

interface EventData {
  title: string;
  author: string;
  price: string;
  image: string;
  tag: string | null;
  date?: string;
}

const EventAdd: React.FC<EventAddProps> = ({ onPressClose }) => {
  const [data, setData] = useState<EventData>({
    title: "",
    author: "",
    price: "",
    image: "",
    tag: null,
    date: "",
  });

  const handleInput = (name: keyof EventData, value: string | null) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerContainer}>
          {/* Close Button */}
          <TouchableOpacity onPress={onPressClose} style={styles.closeBtn}>
            <AntDesign name="close-circle" size={34} color={AppColors.cyan} />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>Event Details</Text>

          {/* Input Fields */}
          <CustomField
            placeholder="Enter Event Title"
            value={data.title}
            onChangeText={(text) => handleInput("title", text)}
          />
          <CustomField
            placeholder="Enter The Details"
            value={data.author}
            onChangeText={(text) => handleInput("author", text)}
          />
          <CustomField
            placeholder="Enter The Tag"
            value={data.tag || ""}
            onChangeText={(text) => handleInput("tag", text)}
          />
          <CustomField
            placeholder="Enter The Date"
            value={data.date || ""}
            onChangeText={(text) => handleInput("date", text)}
          />

          {/* Upload Button */}
          <View style={{ marginTop: vs(25) }}>
            <Buttons title="Upload" onPress={onPressClose}/>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EventAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    backgroundColor: AppColors.black + "75",
    borderRadius: s(20),
    paddingVertical: vs(25),
    paddingHorizontal: s(20),
    marginHorizontal: s(15),
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
  },
  closeBtn: {
    alignSelf: "flex-end",
    marginBottom: vs(15),
  },
  title: {
    fontSize: s(24),
    fontFamily: FONTS.Bold,
    textAlign: "center",
    marginBottom: s(25),
    color: AppColors.cyan,
    letterSpacing: 1,
  },
});
