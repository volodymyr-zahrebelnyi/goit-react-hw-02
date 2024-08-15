import { useState } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Fedback";
// import Options from "../Options/Options";

// import userData from "../../data/userData.json";
// import friends from "../../data/friends.json";
// import transactions from "../../data//transactions.json";

export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = key => {
    setFeedback({
      ...feedback,
      [key]: feedback[key] + 1,
    });
  };

  return (
    <>
      <Description />
      <Feedback feedback={feedback} updateFeedback={updateFeedback} />
    </>
  );
}
