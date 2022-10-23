import { View, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/buttons/Button";
import TextInputComponent from "../components/text_input/TextInputComponent";
import { useCalculationHook } from "./hooks/useCalculationHook";

const HomeScreen = () => {
  const {
    buttonHandler,
    inputValue,
    resultFunc,
    setInputValue,
  } = useCalculationHook();

  return (
    <View style={styles.container}>
      <View style={styles.textInputAndBtnContainer}>
        <TextInputComponent value={inputValue} onChangeText={setInputValue} />
        <View style={styles.btnContainer}>
          <Button
            buttonText="+"
            onPress={() => {
              buttonHandler("+");
            }}
          />
          <Button
            buttonText="-"
            onPress={() => {
              buttonHandler("-");
            }}
          />
          <Button
            buttonText="*"
            onPress={() => {
              buttonHandler("*");
            }}
          />
          <Button
            buttonText="/"
            onPress={() => {
              buttonHandler("/");
            }}
          />
          <Button buttonText="Result" onPress={resultFunc} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    marginTop: 30,
    flexWrap: "wrap",
  },
  textInputAndBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.5,
  },
});

width: "100%";
export default HomeScreen;
