import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Providers from "./js/navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    KufamSemiBoldItalic: require("./assets/fonts/Kufam-BoldItalic.ttf"),
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Providers />;
}
