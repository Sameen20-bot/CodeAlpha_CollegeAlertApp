import { createStackNavigator } from "@react-navigation/stack";
import AdminLogin from "../screens/auth/AdminLogin";
import UserLogin from "../screens/auth/UserLogin";
import AdminSignUp from "../screens/auth/AdminSignUp";
import UserSignUp from "../screens/auth/UserSignUp";
import UserOrAdmin from "../screens/auth/UserOrAdmin";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserOrAdmin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserOrAdmin" component={UserOrAdmin} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="UserLogin" component={UserLogin} />
      <Stack.Screen name="AdminSignUp" component={AdminSignUp} />
      <Stack.Screen name="UserSignUp" component={UserSignUp} />
    </Stack.Navigator>
  );
};
