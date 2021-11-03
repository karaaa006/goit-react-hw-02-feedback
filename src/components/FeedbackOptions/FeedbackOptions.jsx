import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export function FeedbackOptions({ onClick }) {
  return (
    <div className="feedbackOptions">
      <Button name="good" onClick={onClick}>
        Good
      </Button>
      <Button name="neutral" onClick={onClick}>
        Neutral
      </Button>
      <Button name="bad" onClick={onClick}>
        Bad
      </Button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
};
