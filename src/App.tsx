import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Explain how AI works";

  const fetchResponse = async () => {
    try {
      const response = await model.generateContent(prompt);
      console.log(response.response.text());
    } catch (error) {
      console.error(error);
    }
  };

  fetchResponse();

  return (
    <main style={{ margin: "0 24px" }}>
      <h1>Travel Planner</h1>
      <div>
        <label htmlFor="destination">Where would you like to explore?</label>
        <br />
        <input
          type="text"
          id="destination"
        />
      </div>
    </main>
  );
}

export default App;
