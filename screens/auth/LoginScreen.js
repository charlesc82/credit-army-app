import React, { useState } from "react";
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { loginUser } from "../../services/authService";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await loginUser(email, password);
    if (success) navigation.navigate("Main"); // Navigate to BottomTabs after login
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <View style={styles.container}>
      <Text style={styles.emailText}>Email:</Text>
      <TextInput style={styles.emailPlaceholder} value={email} onChangeText={setEmail} />
      <Text style={styles.passwordPlaceholder}>Password:</Text>
      <TextInput style={styles.passwordPlaceholderText} value={password} secureTextEntry onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emailText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    emailPlaceholder: {
        fontSize: 20,
        fontWeight: "bold",
        borderWidth: 1,
        width: 200,
        marginBottom: 20,
    },
    passwordPlaceholder: {
        fontSize: 20,
        fontWeight: "bold",
    },
    passwordPlaceholderText: {
        fontSize: 20,
        fontWeight: "bold",
        borderWidth: 1,
        width: 200,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});
