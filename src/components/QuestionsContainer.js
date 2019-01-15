import React from "react";

import QuestionsMap from "./QuestionsMap";

const QuestionsContainer = props => {
  return (
    //when a house prop is passed, it becomes display:none
    <div className={props.className} style={props.house && { display: "none" }}>
      <div className="questionsWidth">
        <QuestionsMap
          answers={props.answers}
          handleRadio={props.handleRadio}
          questionsData={props.questionsData}
        />
      </div>

      <button
        //sort button shows up when all the answers are filled out
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
