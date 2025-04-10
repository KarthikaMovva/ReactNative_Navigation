import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SpecificDetails = ({ navigation }) => {
  return (
    <LinearGradient colors={["blue", "green"]} style={styles.container}>
      <View>
        <Text style={styles.title}>This is Specific Deatils Screen</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#ff7e5f",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    marginLeft:90,
    fontWeight: "600",
  },
});

export default SpecificDetails;
