import { JSX, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { UserPersonality } from "../constants/UserPersonalities";
import UserAvatarList from ".//UserAvatarList";

export default function MultiStepForm(): JSX.Element {
  const [userPrompt, setUserPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedUserPersonality, setSelectedUserPersonality] =
    useState<UserPersonality | null>(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchResponse = async (): Promise<void> => {
    if (!userPrompt) return;

    try {
      setLoading(true);
      setError("");
      setResponse("");

      const res = await model.generateContent({
        contents: [
          {
            role: "system",
            parts: [
              {
                text: "You are a travel assistant, help plan a trip",
              },
            ],
          },
          { role: "user", parts: [{ text: userPrompt }] },
        ],
        generationConfig: {
          temperature: 0.8,
          topP: 0.8,
          maxOutputTokens: 1, // Keeping short for dev purposes
        },
      });

      if (!res) {
        throw new Error("No response received");
      }
      setResponse(res.response.text());
      setUserPrompt("");
    } catch (error) {
      setError(String(error));
    } finally {
      setLoading(false);
    }
  };

  const handleSelectUserPersonality = (personality: UserPersonality): void => {
    console.log(personality);
    setSelectedUserPersonality(personality);
  };

  return (
    <article>
      <h1>Travel Planner</h1>
      <p>
        Welcome to the travel planner! Enter a destination and select a travel
        persona to get started.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchResponse();
        }}>
        <label htmlFor="destination">Where would you like to explore?</label>
        <br />
        <input
          type="text"
          id="destination"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <br />
        <button disabled={loading || !userPrompt}>Plan my trip</button>
        <br />
        {selectedUserPersonality ? (
          <p>Selected User Persona: {selectedUserPersonality.name}</p>
        ) : (
          <p>Select</p>
        )}
        <section>
          <h2>Choose your travel persona</h2>
          <UserAvatarList
            handleSelectUserPersonality={handleSelectUserPersonality}
          />
        </section>
      </form>
      <section>
        {loading && <p>Loading...</p>}
        {response && <p>{response}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
    </article>
  );
}
