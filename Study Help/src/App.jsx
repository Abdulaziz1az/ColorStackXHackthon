import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [notes, setNotes] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateWithPrompt = async (prompt) => {
    if (!notes.trim()) {
      setOutput("Please paste some notes first.");
      return;
    }

    try {
      setLoading(true);

      const genAI = new GoogleGenerativeAI(
        import.meta.env.VITE_GEMINI_API_KEY
      );

      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(`${prompt}\n\n${notes}`);
      const response = await result.response;
      const text = response.text();

      setOutput(text);
    } catch (error) {
      console.error(error);
      setOutput(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSummarize = () => {
    generateWithPrompt(
      `Summarize these notes in simple bullet points for a student.`
    );
  };

  const handleFlashcards = () => {
    generateWithPrompt(
      `Turn these notes into 5 study flashcards.

Format exactly like this:

Flashcard 1
Q: ...
A: ...

Flashcard 2
Q: ...
A: ...

Flashcard 3
Q: ...
A: ...

Flashcard 4
Q: ...
A: ...

Flashcard 5
Q: ...
A: ...`
    );
  };

  const handleQuiz = () => {
    generateWithPrompt(
      `Create 5 multiple choice quiz questions from these notes.

Format exactly like this:

Question 1
A. ...
B. ...
C. ...
D. ...
Answer: ...

Question 2
A. ...
B. ...
C. ...
D. ...
Answer: ...

Question 3
A. ...
B. ...
C. ...
D. ...
Answer: ...

Question 4
A. ...
B. ...
C. ...
D. ...
Answer: ...

Question 5
A. ...
B. ...
C. ...
D. ...
Answer: ...`
    );
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "900px" }}>
      <h1>Study Help AI</h1>

      <textarea
        placeholder="Paste your study notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows="10"
        cols="80"
        style={{ padding: "10px", fontSize: "16px", width: "100%" }}
      />

      <br />
      <br />

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={handleSummarize} style={buttonStyle}>
          Generate Summary
        </button>

        <button onClick={handleFlashcards} style={buttonStyle}>
          Generate Flashcards
        </button>

        <button onClick={handleQuiz} style={buttonStyle}>
          Generate Quiz
        </button>
      </div>

      <h2 style={{ marginTop: "30px" }}>
        {loading ? "Generating..." : "Output"}
      </h2>

      <div
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRadius: "10px",
          minHeight: "150px",
        }}
      >
        {output}
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default App;