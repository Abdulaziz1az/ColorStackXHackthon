import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!notes.trim()) {
      setSummary("Please paste some notes first.");
      return;
    }

    try {
      setLoading(true);

      console.log("KEY:", import.meta.env.VITE_GEMINI_API_KEY);

      const genAI = new GoogleGenerativeAI(
        import.meta.env.VITE_GEMINI_API_KEY
      );

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const result = await model.generateContent(
        `Summarize these notes in simple bullet points for a student:\n\n${notes}`
      );

      const response = await result.response;
      const text = response.text();

      setSummary(text);
    } catch (error) {
      console.error(error);
      setSummary(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Study Help AI</h1>

      <textarea
        placeholder="Paste your study notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows="10"
        cols="60"
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <br />
      <br />

      <button
        onClick={handleSummarize}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        {loading ? "Generating..." : "Generate Summary"}
      </button>

      <h2>Summary</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>{summary}</p>
    </div>
  );
}

export default App;