function DisplayText({ text }) {
  if (!text) return null;

  return (
    <p style={{ marginTop: "20px" }}>
      Bạn đã nhập: <strong>{text}</strong>
    </p>
  );
}

export default DisplayText;
