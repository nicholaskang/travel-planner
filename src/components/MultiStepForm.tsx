import { JSX, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { UserPersonality } from "../constants/UserPersonalities";
import UserAvatarList from ".//UserAvatarList";

export default function MultiStepForm(): JSX.Element {
  const [step, setStep] = useState(1);
  const [selectedUserPersonality, setSelectedUserPersonality] =
    useState<UserPersonality | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleNextStep = (): void => setStep((prevStep) => prevStep + 1);
  const handlePreviousStep = (): void => setStep((prevStep) => prevStep - 1);

  const handleSelectUserPersonality = (personality: UserPersonality): void => {
    console.log(personality);
    setSelectedUserPersonality(personality);
  };

  // Generating Gemini Response
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

  return (
    <article>
      {/* Step 1: Begin */}
      {step === 1 && (
        <section>
          <h2>Travel Planner</h2>
          <p>
            Welcome to the travel planner! Let's get started planning your next
            trip!
          </p>
          <button onClick={handleNextStep}>Plan My Trip</button>
        </section>
      )}

      {/* Step 2: Choose Travel Style */}
      {step === 2 && (
        <section>
          <h2>Choose your travel style</h2>
          <UserAvatarList
            handleSelectUserPersonality={handleSelectUserPersonality}
          />
          <button onClick={handlePreviousStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </section>
      )}

      {/* Pre-Preview Step  */}
      {step === 3 && (
        <section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchResponse();
            }}>
            <label htmlFor="destination">
              Where would you like to explore?
            </label>
            <br />
            <input
              type="text"
              id="destination"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
            />
          </form>
          <button onClick={handlePreviousStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </section>
      )}

      {/* Loading / Error / Response States */}
      {step === 4 && (
        <section>
          {loading && <p>Loading...</p>}
          {response && <p>{response}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={handlePreviousStep}>Back</button>
        </section>
      )}
    </article>
  );
}
