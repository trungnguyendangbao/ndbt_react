function DisplayText({ text }) {
  if (!text) return null;

  return (
    <p style={{ marginTop: "20px", color: "purple" }}>
      [A+B] Nội dung bạn nhập là:{" "}
      <strong>
        <em>{text}</em>
      </strong>
    </p>
  );
}

export default DisplayText;
