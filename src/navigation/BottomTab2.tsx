import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../styles/colors";
import { s, vs } from "react-native-size-matters";
import EventDisplay from "../screens/student/EventDisplay";
import StudentSettings from "../screens/settings/StudentSettings";

const Tabs = createBottomTabNavigator();

export const BottomTab2 = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.purple,
        tabBarStyle: {
          paddingTop: s(4),
          backgroundColor: AppColors.bgBlue,
        },
        tabBarLabelStyle: {
          fontSize: s(12),
          marginTop: vs(4),
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          title: "Home",
        }}
        name="EventDisplay"
        component={EventDisplay}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          title: "Settings",
        }}
        name="StudentSettings"
        component={StudentSettings}
      />
    </Tabs.Navigator>
  );
};
