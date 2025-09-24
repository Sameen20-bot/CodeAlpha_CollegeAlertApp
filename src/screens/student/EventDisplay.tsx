import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View, FlatList } from "react-native";
import { s } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import { FONTS } from "../../styles/fontt";
import { Feather } from "@expo/vector-icons";
import Event from "../../components/Events/Event";
import AddButton from "../../components/buttons/AddButton";
import FlashMessage, { showMessage } from "react-native-flash-message";
import {
  addItemToEvent,
  deleteItem,
  setEvents,
} from "../../store/reducers/EventSlice";
import { RootState } from "../../store/Store";
import { collection, getDocs } from "firebase/firestore";

const EventDisplay = () => {
  const dispatch = useDispatch();

  const events = useSelector((state: RootState) => state.EventSlice.items);

  // Add new event
  const handleAddEvent = (newEvent: any) => {
    dispatch(addItemToEvent(newEvent));

    showMessage({
      message: "New Event Added!",
      description: newEvent.title,
      type: "success",
      duration: 3000,
    });
  };

  // Delete event
  const handleDelete = (id: number | string) => {
    dispatch(deleteItem(id));

    showMessage({
      message: "Event Deleted",
      type: "danger",
      duration: 3000,
    });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const firestoreEvents = [];
        querySnapshot.forEach((docSnap) => {
          firestoreEvents.push({
            id: docSnap.id,
            ...docSnap.data(),
          });
        });
        dispatch(setEvents(firestoreEvents));
      } catch (err) {
        console.log(err);
        showMessage({
          message: "Failed to fetch events",
          type: "danger",
          duration: 3000,
        });
      }
    };
    fetchEvents();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
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
            detail={item.detail}
            tag={item.tag}
            date={item.date}
            isAdmin={false}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating AddButton */}
      <AddButton
        onPress={() =>
          handleAddEvent({
            id: Date.now(),
            title: "New Event by Admin",
            detail: "Details come from admin input or form",
            tag: "General",
            date: "2025-09-30",
          })
        }
        style={{ position: "absolute", bottom: 30, right: 30 }}
      />

      <FlashMessage position="top" />
    </ImageBackground>
  );
};

export default EventDisplay;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { height: "100%", width: "100%" },
  titleContainer: {
    marginTop: s(30),
    marginStart: s(20),
    marginBottom: s(30),
    flexDirection: "row",
    alignItems: "center",
  },
  headTitle: {
    color: AppColors.white,
    fontFamily: FONTS.Bold,
    fontSize: s(22),
    marginStart: s(10),
  },
});
