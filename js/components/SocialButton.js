import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { windowHeight } from "../utils/Dimensions";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: bgColor }]}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          size={22}
          style={styles.icon}
          color={color}
        />
      </View>
      <View style={styles.btnTextWrapper}>
        <Text style={[styles.buttonText, { color: color }]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    flexDirection: "row",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "LatoRegular",
  },
  iconWrapper: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontWeight: "bold",
  },
  btnTextWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
