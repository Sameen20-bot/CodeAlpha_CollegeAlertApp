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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomFieldControl from "../../components/inputs/CustomFieldControl";
import { useDispatch } from "react-redux";
import { addItemToEvent } from "../../store/reducers/EventSlice";

// Props
interface EventAddProps {
  onSubmit: (event: {
    id: number;
    title: string;
    detail: string;
    tag: string;
    date: string;
  }) => void;
  onPressClose: () => void;
}

// Validation schema
const schema = yup
  .object({
    Title: yup.string().required("*Title is required."),
    Details: yup.string().required("*Details is required."),
    Tag: yup.string().required("*Tag is required."),
    Date: yup.string().required("*Date is required."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const EventAdd: React.FC<EventAddProps> = ({ onSubmit, onPressClose }) => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
    const newEvent = {
      id: Date.now(),
      title: data.Title,
      detail: data.Details,
      tag: data.Tag,
      date: data.Date,
    };
    onSubmit(newEvent); // send to parent
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
          <CustomFieldControl
            name="Title"
            control={control}
            placeholder="Enter Event Title"
          />
          <CustomFieldControl
            name="Details"
            control={control}
            placeholder="Enter Details"
          />
          <CustomFieldControl
            name="Tag"
            control={control}
            placeholder="Enter Tag"
          />
          <CustomFieldControl
            name="Date"
            control={control}
            placeholder="Enter Date"
          />

          {/* Upload Button */}
          <View style={{ marginTop: vs(25) }}>
            <Buttons title="Upload" onPress={handleSubmit(handleFormSubmit)} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EventAdd;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { height: "100%", width: "100%" },
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