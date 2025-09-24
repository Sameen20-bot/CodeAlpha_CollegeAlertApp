import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { BottomTab } from "./BottomTab";
import { BottomTab2 } from "./BottomTab2";
import UserLogin from "../screens/auth/UserLogin";
import AdminLogin from "../screens/auth/AdminLogin";
import PrivacyPolicy from "../components/PrivacyAndPolicy/PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserData } from "../store/reducers/UserSlice";
import { useEffect, useState } from "react";
import { RootState } from "../store/Store";
import UserOrAdmin from "../screens/auth/UserOrAdmin";
import UserSignUp from "../screens/auth/UserSignUp";
import AdminSignUp from "../screens/auth/AdminSignUp";

const Stack = createStackNavigator();


export const MainStack = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.userSlice);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isUserLoggedIn = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem("USER_DATA");
        if (storedUserData) {
          dispatch(setUserData(JSON.parse(storedUserData)));
        }
      } catch (error) {
        console.error("Error reading stored user", error);
      } finally {
        setLoading(false);
      }
    };
    isUserLoggedIn();
  }, []);

  if (loading) return null; 

  let initialRoute = "UserOrAdmin";
  if (userData?.role === "admin") {
    initialRoute = "BottomTab2";
  } else if (userData?.role === "student") {
    initialRoute = "BottomTab";
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name="UserOrAdmin" component={UserOrAdmin} />
      <Stack.Screen name="BottomTab2" component={BottomTab2} />
      <Stack.Screen name="BottomTab" component={BottomTab} />

      <Stack.Screen name="UserLogin" component={UserLogin} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="UserSignUp" component={UserSignUp} />
      <Stack.Screen name="AdminSignUp" component={AdminSignUp} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};