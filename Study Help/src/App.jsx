import { useState } from "react";

function App() {
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Study Help AI</h1>

      <textarea
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows="10"
        cols="60"
      />

      <br /><br />

      <button>Generate Summary</button>

      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
}

export default App;