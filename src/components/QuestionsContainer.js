import React from "react";

import QuestionsMap from "./QuestionsMap";

const QuestionsContainer = props => {
  return (
    <div className={props.className}>
      <QuestionsMap
        answers={props.answers}
        handleRadio={props.handleRadio}
        questionsData={props.questionsData}
      />

      <button
        className={
          props.answers.indexOf(undefined) < 0 &&
          props.answers.length === props.questionsData.length
            ? "basket"
            : "basket hide"
        }
        onClick={props.sort}
      >
        SORT!!!!
      </button>
    </div>
  );
};

export default QuestionsContainer;
