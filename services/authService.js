import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

// 🔹 Login User
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.error("Login Error:", error.message);
    return false;
  }
};

// 🔹 Signup User
export const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.error("Signup Error:", error.message);
    return false;
  }
};

// 🔹 Reset Password
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    console.error("Reset Password Error:", error.message);
    return false;
  }
};

// 🔹 Logout User
export const logoutUser = async () => {
  await signOut(auth);
};
