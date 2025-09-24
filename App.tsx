import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/navigation/MainStack";
import { store } from "./src/store/Store";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [fonts] = useFonts({
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fonts) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <FlashMessage position="top" />
        <Provider store={store}>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
