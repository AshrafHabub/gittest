import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const done = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text
      style={{
        color: "white",
        marginHorizontal: 7,
        fontWeight: "bold",
        fontSize: 16,
      }}
    >
      Fertig
    </Text>
  </TouchableOpacity>
);

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      DoneButtonComponent={done}
      nextLabel="Weiter"
      skipLabel="Überspringen"
      pages={[
        {
          backgroundColor: "#D77FA1",
          image: (
            <Image
              width={100}
              height={100}
              source={require("../../assets/images/onBoarding/circle-green.png")}
            />
          ),
          title: "Lerne neue Leute kennen!",
          subtitle:
            "Wähle dir ganz einfach dein Ort aus und check ab, was dort abgeht!",
        },
        {
          backgroundColor: "#F78BB3",
          image: (
            <Image
              width={200}
              height={200}
              source={require("../../assets/images/onBoarding/circle-yellow.png")}
            />
          ),
          title: "Eigenes Event erstellen",
          subtitle:
            "Erstelle ganz simple ein Event und werde ein Veranstalter! Ob Deeptalks, zum Shishan oder whatever, du hast die Wahl! ;)",
        },
        {
          backgroundColor: "#C39DAB",
          image: (
            <Image
              width={200}
              height={200}
              source={require("../../assets/images/onBoarding/circle-red.png")}
            />
          ),
          title: "SICHERHEIT (SAFETY FIRST)",
          subtitle:
            "Bitte achte auf deine eigene Sicherheit und treffe dich nur an vertrauten Orten mit mehreren Freunden.",
        },
      ]}
    />
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
