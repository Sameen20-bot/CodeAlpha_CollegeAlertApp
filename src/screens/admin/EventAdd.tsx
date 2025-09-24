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
  const dispatch = useDispatch();

  const schema = yup
    .object({
      Title: yup.string().required("*Title is required."),

      Details: yup.string().required("*Details is required."),

      Tag: yup.string().required("*Tag is required."),

      Date: yup.string().required("*Date is required."),
    })
    .required();

  type data = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: data) => {
    dispatch(
      addItemToEvent({
        id: Date.now(),
        title: data.Title,
        details: data.Details,
        tag: data.Tag,
        date: data.Date,
      })
    );
    onPressClose();
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
            <Buttons title="Upload" onPress={handleSubmit(onSubmit)} />
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
