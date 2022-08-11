import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account erstellen</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="E-Mail Adresse"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Passwort"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={password}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        placeholderText="Bestätige Passwort"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Registrieren"
        onPress={() => alert("Registrieren Button geklickt!")}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          Mit der Registrierung akzeptierst du unsere{" "}
        </Text>
        <TouchableOpacity onPress={() => alert("Terms of Service geklickt")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of Service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> und </Text>
        <TouchableOpacity onPress={() => alert("Privacy policy geklickt")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>

      <SocialButton
        buttonTitle="Registrieren mit Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Registrieren mit Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.navButtonText}>
          Schon registriert? Logge dich ein
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafd",
    padding: 20,
  },
  text: {
    fontFamily: "KufamSemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "LatoRegular",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "LatoRegular",
    color: "grey",
  },
});
