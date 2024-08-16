import { useState, useEffect } from "react";

import css from "./App.module.css";

import Description from "../Description/Description";
import Feedback from "../Feedback/Fedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const getInitialFeedback = () => {
  const savedFeedback = window.localStorage.getItem("updateFeedback");
  return savedFeedback !== null
    ? JSON.parse(savedFeedback)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFidback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    window.localStorage.setItem("updateFeedback", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    window.localStorage.setItem("totalFeedback", totalFeedback);
    window.localStorage.setItem("positiveFeedback", positiveFidback);
  }, [totalFeedback, positiveFidback]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFidback={positiveFidback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
