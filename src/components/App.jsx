import React from "react";
import { Box } from "./App.styled.js";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification.jsx";
import Section from "./Section/Section.jsx";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = ({ option }) => {
    this.setState((state) => ({ [option]: state[option] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() &&
    Math.round((this.state.good / this.countTotalFeedback()) * 1000) / 10;

  stateKeys = Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage();
    return (
      <Box className="app" column width="50%">
        <Section heading="Please leave feedback">
          <FeedbackOptions
            options={this.stateKeys}
            onLeaveFeedback={this.addFeedback}
          />
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
  }
}

export default App;
