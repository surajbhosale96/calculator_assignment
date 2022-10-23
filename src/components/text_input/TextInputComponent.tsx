import { StyleSheet, TextInput, TextInputProps } from "react-native";
import React from "react";

const TextInputComponent = (props: TextInputProps) => {
  return (
    <TextInput
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType="number-pad"
      style={[styles.textInputStyles,props.style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyles:{
    borderColor:"#ccc",
    borderWidth:1,
    width:"90%",
    color:"#000",
    fontSize:20,
    borderRadius:5
  }
})

export default TextInputComponent;
