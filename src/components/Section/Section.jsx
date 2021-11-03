export function Section({ text, children }) {
  return (
    <>
      <h2 className="title">{text}</h2>
      {children}
    </>
  );
}
