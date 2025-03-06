import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { createSubscription } from "../../services/subscriptionService";

export default function SubscriptionsScreen({ navigation }) {
  const subscribe = async (planType, plan) => {
    await createSubscription("user123", { planType, plan, startDate: new Date() });
    navigation.navigate("Home"); // Navigate to the Home screen
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select a Plan:</Text>

      <Text style={styles.subtitle}>Personal Plans</Text>
      <TouchableOpacity style={styles.button} onPress={() => subscribe("Personal", "Starter")}>
        <Text style={styles.buttonText}>Starter - $39.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => subscribe("Personal", "Basic")}>
        <Text style={styles.buttonText}>Basic - $99.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => subscribe("Personal", "Premium")}>
        <Text style={styles.buttonText}>Premium - $199.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => subscribe("Personal", "Elite")}>
        <Text style={styles.buttonText}>Elite - $349.99</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Business Plans</Text>
      <TouchableOpacity style={styles.button} onPress={() => subscribe("Business", "Starter")}>
        <Text style={styles.buttonText}>Starter - $39.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => subscribe("Business", "Basic")}>
        <Text style={styles.buttonText}>Basic - $99.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => subscribe("Business", "Premium")}>
        <Text style={styles.buttonText}>Premium - $199.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => subscribe("Business", "Elite")}>
        <Text style={styles.buttonText}>Elite - $399.99</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  subtitle: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 20, marginBottom: 10 },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});