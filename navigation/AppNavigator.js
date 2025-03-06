import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

import BottomTabs from "./BottomTabs";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPassword";
import OnboardingScreen from "../screens/auth/OnboardingScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      setUser(authenticatedUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return null; // Wait until Firebase checks user status

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Login" component={LoginScreen}  options={{
                headerShown: false,
            }}
             />
            <Stack.Screen name="Signup" component={SignupScreen}  options={{
                headerShown: false,
            }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}  options={{
                headerShown: false,
            }} />
          </>
        ) : (
          <Stack.Screen name="Main" component={BottomTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
