export function Button({ text, action }) {
  return (
    <button className="btn" onClick={action}>
      {text}
    </button>
  );
}
