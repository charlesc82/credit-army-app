import { loadStripe } from "@stripe/stripe-js";
import { db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

export async function purchaseAiCoaching(userId) {
  try {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1XXXXX", quantity: 1 }], // Replace with Stripe Price ID
      mode: "payment",
      successUrl: window.location.origin + "/credit-coaching",
      cancelUrl: window.location.origin + "/credit-coaching",
    });

    if (!error) {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { aiCoachingPaid: true });
      return true;
    } else {
      console.error("Stripe Error:", error);
      return false;
    }
  } catch (error) {
    console.error("Payment Error:", error);
    return false;
  }
}
