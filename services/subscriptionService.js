import { db } from "../firebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Function to create a new subscription
export async function createSubscription(userId, subscriptionData) {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, { subscription: subscriptionData }, { merge: true });
    console.log("Subscription created successfully");
  } catch (error) {
    console.error("Error creating subscription: ", error);
  }
}

// Function to get a user's subscription
export async function getSubscription(userId) {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data().subscription;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting subscription: ", error);
  }
}

// Function to update a user's subscription
export async function updateSubscription(userId, subscriptionData) {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { subscription: subscriptionData });
    console.log("Subscription updated successfully");
  } catch (error) {
    console.error("Error updating subscription: ", error);
  }
}

// Function to cancel a user's subscription
export async function cancelSubscription(userId) {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { subscription: null });
    console.log("Subscription canceled successfully");
  } catch (error) {
    console.error("Error canceling subscription: ", error);
  }
}