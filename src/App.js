import React, { useState } from "react";

export default function App() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello World... This is my React.js</h1>
      <button
        onClick={() => setShowQuote(true)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#6200ea",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Click Me
      </button>

      {showQuote && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
          "You are the queen of your own world, you can do magic... Keep growing with a smile."
        </p>
      )}
    </div>
  );
}
