import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./src/navigation/AuthStack";

export default function App() {
  const [fonts] = useFonts({
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fonts) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
