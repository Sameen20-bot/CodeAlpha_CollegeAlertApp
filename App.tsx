import { StyleSheet, Text, View } from "react-native";
import AdminLogin from "./src/screens/auth/AdminLogin";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AdminLogin />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
