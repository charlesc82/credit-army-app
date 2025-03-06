import React, { useState } from "react";
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import { resetPassword } from "../../services/authService";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    const success = await resetPassword(email);
    if (success) {
      Alert.alert("Success", "Password reset email sent.");
      navigation.navigate("Login");
    } else {
      Alert.alert("Error", "Password reset failed. Check your email.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <View style={styles.container}>
      <Text style={styles.label}>Enter your email to reset your password:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.resetPasswordButtonContainer} onPress={handlePasswordReset}>
        <Text style={styles.resetPasswordButtonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons style={styles.icon} name="arrow-left" size={24} color="black" />
        <Text style={styles.loginButtonText}>Back To Login</Text>
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
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
    },
    resetPasswordButtonContainer: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center",
    },
    resetPasswordButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    icon: {
        marginRight: 5,
    },
    loginButtonText: {
        fontSize: 16,
    },
});