import s from "./Statistics.module.scss";

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={s.statistics}>
        <li className={s.statisticElem}>Good: {good}</li>
        <li className={s.statisticElem}>Neutral: {neutral}</li>
        <li className={s.statisticElem}>Bad: {bad}</li>
        <li className={[s.statisticElem, s.statT]}>Total: {total}</li>
      </ul>
      <p>Positive feedback: {positivePercentage || 0}%</p>
    </>
  );
}
