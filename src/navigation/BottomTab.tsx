import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventScreen from "../screens/admin/EventScreen";
import AdminSettings from "../screens/settings/AdminSettings";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../styles/colors";
import { s, vs } from "react-native-size-matters";

const Tabs = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.cyan,
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
        name="EventScreen"
        component={EventScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          title: "Settings",
        }}
        name="AdminSettings"
        component={AdminSettings}
      />
    </Tabs.Navigator>
  );
};
