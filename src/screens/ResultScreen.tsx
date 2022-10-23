import { View, Text, StyleSheet } from "react-native";
import React  from "react";
import { useRoute } from "@react-navigation/native";
import { ResultScreenRouteProp } from "../RootNavigationType";

const ResultScreen = () => {
  const route = useRoute<ResultScreenRouteProp>();
console.log(route.params.result);

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>RESULT: {route.params.result}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  },
  resultText:{
    fontSize:20,
    color:"green",
    textAlign:"center",
    marginTop:30
  }
})
export default ResultScreen;
