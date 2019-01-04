import React from "react";

import QuestionsMap from "./QuestionsMap";

const QuestionsContainer = props => {
  return (
    <div className={props.className}>
      <QuestionsMap answers={props.answers} handleRadio={props.handleRadio} />
    </div>
  );
};

export default QuestionsContainer;
