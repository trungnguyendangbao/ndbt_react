function DisplayText({ text }) {
  if (!text) return null;

  return (
    <p style={{ marginTop: "20px", color: "blue" }}>
      [A] Bạn vừa nhập: <strong>{text}</strong>
    </p>
  );
}

export default DisplayText;
