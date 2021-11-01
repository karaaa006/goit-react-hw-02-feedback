import { Component } from "react";
import { Button } from "../Button/Button";

class Statistics extends Component {
  constructor({ title = "Statistics" }) {
    super();

    this.title = title;

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  addGrade = (grade) => {
    this.setState((prev) => ({
      [grade]: prev[grade] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <ul className="btnList">
          <li className="btn">
            <Button text={"Good"} action={() => this.addGrade("good")} />
          </li>
          <li className="btn">
            <Button text={"Neutral"} action={() => this.addGrade("neutral")} />
          </li>
          <li className="btn">
            <Button text={"Bad"} action={() => this.addGrade("bad")} />
          </li>
        </ul>

        <h2 className="statTitle">{this.title}</h2>

        <ul className="stat">
          <li className="statElement">Good: {good}</li>
          <li className="statElement">Neutral: {neutral}</li>
          <li className="statElement">Bad: {bad}</li>
        </ul>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage() || 0}%</p>
      </>
    );
  }
}

export { Statistics };
