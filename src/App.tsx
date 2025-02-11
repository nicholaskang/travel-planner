import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import UserPersonalities from "./constants/UserPersonalities";
import SystemPersonalities from "./constants/SystemPersonalities";
import UserAvatar from "./components/UserAvatar";
import SystemAvatar from "./components/SystemAvatar";

function App() {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchResponse = async () => {
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
      setResponse(res.response.text());
      setUserPrompt("");
    } catch (error) {
      setError(String(error));
    } finally {
      setLoading(false);
    }
  };

  const UserAvatarList = UserPersonalities.map((personality) => (
    <UserAvatar
      key={personality.key}
      personality={personality}
    />
  ));

  const SystemAvatarList = SystemPersonalities.map((personality) => (
    <SystemAvatar
      key={personality.key}
      personality={personality}
    />
  ));

  return (
    <main style={{ margin: "0 24px" }}>
      <h1>Travel Planner</h1>
      <form>
        <label
          htmlFor="destination"
          onSubmit={fetchResponse}>
          Where would you like to explore?
        </label>
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
        <section>
          <h2>Choose your travel persona</h2>
          {UserAvatarList}
        </section>
        <section>
          <h2>Choose your helper</h2>
          {SystemAvatarList}
        </section>
      </form>
      <section>
        {loading && <p>Loading...</p>}
        {response && <p>{response}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
    </main>
  );
}

export default App;
