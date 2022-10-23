import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ErrorScreenRouteProp } from "../RootNavigationType";
import { useRoute } from "@react-navigation/native";

const ErrorScreen = () => {
  const route = useRoute<ErrorScreenRouteProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>ERROR: {route.params.error}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  },
  errorText:{
    fontSize:20,
    color:"red",
    textAlign:"center",
    marginTop:30
  }
})

export default ErrorScreen;
