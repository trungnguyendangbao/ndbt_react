function DisplayText({ text }) {
  if (!text) return null;

  return (
    <p style={{ marginTop: "20px", color: "green" }}>
      [B] Nội dung bạn nhập là: <em>{text}</em>
    </p>
  );
}

export default DisplayText;
