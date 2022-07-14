import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { Panel, Button } from "./FeedbackOptions.styled";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const id = nanoid();
  return (
    <Panel className="feedback__panel">
      {options.map((option) => (
        <Button
          type="button"
          key={option + id}
          className={"btn--" + option}
          onClick={() => onLeaveFeedback({ option })}
        >
          {option}
        </Button>
      ))}
    </Panel>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
