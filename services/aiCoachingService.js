import axios from "axios";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function generateAiCoachingPlan(userId) {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) return "User not found.";

    const { creditScore, missedPayments, utilizationRate, tradelines } = userSnap.data();

    const aiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a credit-building coach." },
          {
            role: "user",
            content: `The user has a credit score of ${creditScore}, ${missedPayments} missed payments, utilization rate of ${utilizationRate}%, and ${tradelines.length} active tradelines.
            Generate a step-by-step credit-building plan.`,
          },
        ],
      },
      {
        headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` },
      }
    );

    const coachingPlan = aiResponse.data.choices[0].message.content;
    await updateDoc(userRef, { aiCoachingPlan: coachingPlan });

    return coachingPlan;
  } catch (error) {
    console.error("AI Coaching Error:", error);
    return "Error generating AI credit coaching plan.";
  }
}
