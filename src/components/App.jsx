import React from "react";
import { Box } from "./App.styled.js";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification.jsx";
import Section from "./Section/Section.jsx";
import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = ({ option }) => {
    switch (option) {
      case "good":
        setGood((good) => good + 1);
        return;
      case "neutral":
        setNeutral((neutral) => neutral + 1);
        return;
      case "bad":
        setBad((bad) => bad + 1);
        return;
      default:
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() &&
    Math.round((good / countTotalFeedback()) * 1000) / 10;

  const stateKeys = ["good", "neutral", "bad"];

  const total = countTotalFeedback();
  const goodPercent = countPositiveFeedbackPercentage();
  return (
    <Box className="app" column width="50%">
      <Section heading="Please leave feedback">
        <FeedbackOptions options={stateKeys} onLeaveFeedback={addFeedback} />
      </Section>
      <Section heading="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={goodPercent}
          />
        )}
      </Section>
    </Box>
  );
};

export default App;
