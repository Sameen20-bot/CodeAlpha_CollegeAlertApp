import { StyleSheet, Modal, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { FONTS } from "../../styles/fontt";
import { AppColors } from "../../styles/colors";
import { s } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC, useState } from "react";

interface EventTypes {
  title: string;
  detail: string;
  tag: string;
  date: string | number;
  onDelete?: () => void;
  isAdmin: boolean;
}

const Event: FC<EventTypes> = ({
  title,
  detail,
  tag,
  date,
  onDelete,
  isAdmin,
}) => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <>
      <Shadow
        distance={12}
        startColor={AppColors.cyan}
        containerStyle={{
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
          marginBottom: s(30),
        }}
      >
        <TouchableOpacity
          style={styles.eventContainer}
          activeOpacity={0.9}
          onPress={handleOpen}
        >
          <View style={styles.detailContainer}>
            <View style={styles.detailHead}>
              <AppText style={styles.title}>{title}</AppText>
              <View style={styles.tag}>
                <AppText style={styles.tagText}>{tag}</AppText>
              </View>
            </View>
            <AppText style={styles.text} numberOfLines={2}>
              {detail}
            </AppText>
            <AppText style={styles.date}>📅 {date}</AppText>
          </View>

          {/* ✅ Show delete only if isAdmin=true */}
          {isAdmin && (
            <View style={styles.deleteContainer}>
              <TouchableOpacity style={styles.dltButton} onPress={onDelete}>
                <MaterialCommunityIcons
                  name="delete"
                  size={24}
                  color={AppColors.red}
                />
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      </Shadow>

      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <AppText style={styles.modalTitle}>{title}</AppText>
            <AppText style={styles.modalDate}>📅 {date}</AppText>
            <AppText style={styles.modalTag}>Category: {tag}</AppText>
            <AppText style={styles.modalDesc}>{detail}</AppText>

            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <AppText style={styles.closeText}>Close</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Event;

const styles = StyleSheet.create({
  eventContainer: {
    width: s(320),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: s(120),
    borderRadius: s(16),
    borderColor: AppColors.cyan,
    borderWidth: s(1),
    paddingHorizontal: s(12),
    backgroundColor: AppColors.black + "90",
  },
  detailContainer: { flex: 0.8, marginRight: s(8) },
  detailHead: { flexDirection: "row" },
  tag: {
    backgroundColor: AppColors.cyan + "75",
    borderRadius: s(10),
    borderColor: AppColors.cyan,
    borderWidth: 1,
    marginLeft: s(10),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: s(3),
    paddingVertical: s(1),
  },
  tagText: { color: AppColors.cyan, fontFamily: FONTS.Medium },
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
  title: { fontFamily: FONTS.Bold, color: AppColors.white, fontSize: s(15) },
  text: { fontFamily: FONTS.Medium, color: AppColors.white, fontSize: s(14) },
  date: {
    marginTop: s(5),
    fontFamily: FONTS.Medium,
    color: AppColors.white,
    fontSize: s(14),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: AppColors.black,
    padding: s(20),
    borderRadius: s(16),
    borderWidth: 1,
    borderColor: AppColors.cyan,
  },
  modalTitle: {
    fontFamily: FONTS.Bold,
    color: AppColors.cyan,
    fontSize: s(18),
    marginBottom: s(10),
  },
  modalDate: {
    fontFamily: FONTS.Medium,
    color: AppColors.white,
    fontSize: s(14),
    marginBottom: s(8),
  },
  modalTag: {
    fontFamily: FONTS.Medium,
    color: AppColors.cyan,
    fontSize: s(14),
    marginBottom: s(12),
  },
  modalDesc: {
    fontFamily: FONTS.Medium,
    color: AppColors.white,
    fontSize: s(14),
    marginBottom: s(20),
  },
  closeButton: {
    backgroundColor: AppColors.cyan,
    borderRadius: s(10),
    alignSelf: "center",
    paddingHorizontal: s(20),
    paddingVertical: s(8),
  },
  closeText: {
    fontFamily: FONTS.Medium,
    color: AppColors.black,
    fontSize: s(14),
  },
});
