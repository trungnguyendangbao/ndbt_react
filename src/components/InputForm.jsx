import { useState } from "react";

function InputForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div>
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
    </div>
  );
}

export default InputForm;
