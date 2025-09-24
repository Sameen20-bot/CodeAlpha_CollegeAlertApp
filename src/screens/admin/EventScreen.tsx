import {
  ImageBackground,
  Modal,
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
import AddButton from "../../components/buttons/AddButton";
import { useEffect, useState } from "react";
import EventAdd from "./EventAdd";
import Event from "../../components/Events/Event";
import { events } from "../../data/events";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import {
  addItemToEvent,
  deleteItem,
  EventSliceTypes,
  setEvents,
} from "../../store/reducers/EventSlice";
import FlashMessage, { showMessage } from "react-native-flash-message";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../configs/firebase";

const EventDisplay = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.EventSlice.items);

  const [visible, setVisible] = useState(false);

  // Load all events from Firestore on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const firestoreEvents: EventSliceTypes[] = [];
        querySnapshot.forEach((docSnap) => {
          firestoreEvents.push({
            id: docSnap.id,
            ...docSnap.data(),
          } as EventSliceTypes);
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

  // Add new event
  const handleAddEvent = async (newEvent: EventSliceTypes) => {
    try {
      const docRef = await addDoc(collection(db, "events"), newEvent);

      const eventWithId = { ...newEvent, id: docRef.id };

      dispatch(addItemToEvent(eventWithId));

      showMessage({
        message: "New Event Added!",
        description: newEvent.detail,
        type: "success",
        duration: 3000,
      });
    } catch (err) {
      console.log(err);
      showMessage({
        message: "Failed to add event",
        type: "danger",
        duration: 3000,
      });
    }
  };

  // Delete event
  const handleDelete = async (id: string | number) => {
    try {
      await deleteDoc(doc(db, "events", id.toString()));
      dispatch(deleteItem(id));
      showMessage({
        message: "Event Deleted",
        type: "danger",
        duration: 3000,
      });
    } catch (err) {
      console.log(err);
      showMessage({
        message: "Failed to delete event",
        type: "danger",
        duration: 3000,
      });
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      {/* Title */}
      <View style={styles.titleContainer}>
        <Feather name="list" size={30} color={AppColors.cyan} />
        <AppText style={styles.headTitle}>Manage Events</AppText>
      </View>

      {/* Events List */}
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Event
            title={item.title}
            detail={item.detail}
            tag={item.tag}
            date={item.date}
            onDelete={() => handleDelete(item.id)}
            isAdmin={true}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Add Button */}
      {/* Floating Add Button */}
      <View
        style={{
          position: "absolute",
          bottom: s(0), 
          left: 0,
          right: 0, 
          alignItems: "center", 
          justifyContent: "center",
        }}
      >
        <AddButton onPress={() => setVisible(true)} />
      </View>

      {/* Add Event Modal */}
      <Modal visible={visible} animationType="slide">
        <EventAdd
          onSubmit={(newEvent) => {
            handleAddEvent(newEvent);
            setVisible(false);
          }}
          onPressClose={() => setVisible(false)}
        />
      </Modal>
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
