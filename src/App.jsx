import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(inputValue);
    console.log("Bạn đã nhập:", inputValue);
  };

  return (
    <div
      className="app-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>Form đơn giản</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập gì đó..."
        style={{ padding: "8px", fontSize: "16px", width: "200px" }}
      />
      <br />
      <br />
      <button
        onClick={handleSubmit}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Gửi
      </button>
      {submittedText && (
        <p style={{ marginTop: "20px" }}>
          Bạn đã nhập: <strong>{submittedText}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
