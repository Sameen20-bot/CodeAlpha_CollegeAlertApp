import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import UserLogin from "./src/screens/auth/UserLogin";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <UserLogin />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
