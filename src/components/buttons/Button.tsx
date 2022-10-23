import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  const { buttonText, onPress } = props;

  return (
    <TouchableOpacity
      style={[styles.buttonStyles, props.style]}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: "#000",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin:6
  },
  btnText: {
    color: "#ffff",
    fontSize:17
  },
});

export default Button;
