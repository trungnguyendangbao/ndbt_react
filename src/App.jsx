import { useState } from "react";
import InputForm from "./components/InputForm";
import DisplayText from "./components/DisplayText";
import "./App.css";

function App() {
  const [submittedText, setSubmittedText] = useState("");

  const handleFormSubmit = (text) => {
    setSubmittedText(text);
    console.log("Bạn đã nhập:", text);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Form đơn giản với component</h1>
      <InputForm onSubmit={handleFormSubmit} />
      <DisplayText text={submittedText} />
    </div>
  );
}

export default App;
