import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getUpsellRecommendation } from "../../services/UpsellEngine";
import { db } from "../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export default function PlanUpgrade({ userId }) {
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    const fetchRecommendation = async () => {
      const rec = await getUpsellRecommendation(userId);
      setRecommendation(rec);
    };
    fetchRecommendation();
  }, []);

  const upgradePlan = async (newPlan) => {
    await updateDoc(doc(db, "users", userId), { plan: newPlan });
    alert(`Upgraded to ${newPlan}!`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Personalized Upgrade Offer</Text>
        <TouchableOpacity onPress={() => upgradePlan("Personal Starter")}>
          <Text style={styles.recommendation}>Upgrade to Personal Starter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("Personal Basic")}>
          <Text style={styles.recommendation}>Upgrade to Personal Basic</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("Personal Premium")}>
          <Text style={styles.recommendation}>Upgrade to Personal Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("Personal Elite")}>
          <Text style={styles.recommendation}>Upgrade to Personal Elite</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("Business Starter")}>
          <Text style={styles.recommendation}>Upgrade to Business Starter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("Business Basic")}>
          <Text style={styles.recommendation}>Upgrade to Business Basic</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("Business Premium")}>
          <Text style={styles.recommendation}>Upgrade to Business Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("Business Elite")}>
          <Text style={styles.recommendation}>Upgrade to Business Elite</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("B2C Enterprise")}>
          <Text style={styles.recommendation}>Upgrade to Business Enterprise</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => upgradePlan("B2B Enterprise")}>
          <Text style={styles.recommendation}>Upgrade to Business Enterprise</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  recommendation: {
    fontSize: 16,
    marginBottom: 10,
    color: "blue",
  },
});