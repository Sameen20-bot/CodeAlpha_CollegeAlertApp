import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { BottomTab } from "./BottomTab";
import { BottomTab2 } from "./BottomTab2";
import UserLogin from "../screens/auth/UserLogin";
import AdminLogin from "../screens/auth/AdminLogin";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="BottomTab2" component={BottomTab2} />
      <Stack.Screen name="UserLogin" component={UserLogin} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
    </Stack.Navigator>
  );
};
