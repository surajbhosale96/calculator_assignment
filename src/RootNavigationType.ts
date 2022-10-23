import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Result: { result: string  };
  Error:{error:string}
};

export type ResultScreenProp = NativeStackNavigationProp<RootStackParamList, "Result">;
export type ResultScreenRouteProp = RouteProp<RootStackParamList,"Result">
export type ErrorScreenProp = NativeStackNavigationProp<RootStackParamList, "Error">;
export type ErrorScreenRouteProp = RouteProp<RootStackParamList,"Error">
