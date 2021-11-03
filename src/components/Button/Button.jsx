import s from "./Button.module.scss";

export function Button({ children, onClick, name }) {
  return (
    <button name={name} className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
}
