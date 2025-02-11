import { JSX, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import UserPersonalities, {
  UserPersonality,
} from "./constants/UserPersonalities";
import SystemPersonalities, {
  SystemPersonality,
} from "./constants/SystemPersonalities";
import UserAvatar from "./components/UserAvatar";
import SystemAvatar from "./components/SystemAvatar";

const App = (): JSX.Element => {
  const [userPrompt, setUserPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedUserPersonality, setSelectedUserPersonality] =
    useState<UserPersonality | null>(null);
  const [selectedSystemPersonality, setSelectedSystemPersonality] =
    useState<SystemPersonality | null>(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchResponse = async (): Promise<void> => {
    if (!userPrompt) return;

    try {
      setLoading(true);
      setError("");
      setResponse("");

      // const res = await model.generateContent({
      //   contents: [
      //     {
      //       role: "system",
      //       parts: [
      //         {
      //           text: "You are a fun and engaging travel assistant, well traveled, varying from experiences like backpacking to luxury experiences. You are also well versed on cuisine, dining, restaurants, reviews, and are able to make the best recommendations for each specific person's style, budget, taste, and preferenes. Keep responses short and action-packed. Avoid unnecessary information.",
      //         },
      //       ],
      //     },
      //     { role: "user", parts: [{ text: userPrompt }] },
      //   ],
      //   generationConfig: {
      //     temperature: 0.8,
      //     topP: 0.8,
      //     maxOutputTokens: 500,
      //   },
      // });

      // if (!res) { throw new Error("No response received"); }
      // setResponse(res.response.text());
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

  // Move these to separate components
  const UserAvatarList = (): JSX.Element => (
    <>
      {UserPersonalities.map((personality: UserPersonality) => (
        <UserAvatar
          key={personality.key}
          personality={personality}
          handleSelectUserPersonality={handleSelectUserPersonality}
        />
      ))}
    </>
  );

  const SystemAvatarList = (): JSX.Element => (
    <>
      {SystemPersonalities.map((personality: SystemPersonality) => (
        <SystemAvatar
          key={personality.key}
          personality={personality}
        />
      ))}
    </>
  );

  return (
    <main style={{ margin: "0 24px" }}>
      <h1>Travel Planner</h1>
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
        {selectedSystemPersonality && (
          <p>Selected System Persona: {selectedSystemPersonality.name}</p>
        )}
        <section>
          <h2>Choose your travel persona</h2>
          {UserAvatarList()}
        </section>
        <section>
          <h2>Choose your helper</h2>
          {SystemAvatarList()}
        </section>
      </form>
      <section>
        {loading && <p>Loading...</p>}
        {response && <p>{response}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
    </main>
  );
};

export default App;
