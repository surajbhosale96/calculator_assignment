import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ErrorScreenProp, ResultScreenProp } from "../../RootNavigationType";

export const useCalculationHook = () => {
  const [inputValue, setInputValue] = useState("");

  const operation = ["/", "-", "+", "*"];

  const Resultnavigation = useNavigation<ResultScreenProp>();
  const Errortnavigation = useNavigation<ErrorScreenProp>();

  const buttonHandler = (value: string) => {
    if (
      (operation.includes(value) && inputValue === "") ||
      (operation.includes(value) && operation.includes(inputValue.slice(-1)))
    ) {
      return;
    }
    setInputValue(inputValue + value);
  };

  const resultFunc = () => {
    if (inputValue) {
      const digits = inputValue.split("");
      const lastVal = digits[digits.length - 1];
      if (operation.includes(lastVal)) {
        Errortnavigation.navigate("Error", { error: "Invalid expression" });
      } else {
        const result = eval(inputValue);
        Resultnavigation.navigate("Result", { result });
      }
    }
  };

  return {
    resultFunc,
    buttonHandler,
    inputValue,
    setInputValue,
  };
};
