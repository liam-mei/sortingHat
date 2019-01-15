import React from "react";

// import questionsData from "../Data/questionsData";

import AnswerChoices from "./AnswerChoices";

const QuestionsMap = props => {
  return (
    <div className="questionsContainer">
      {props.questionsData.map((item, index) => (
        <div key={item.question} className="blue flexChild">
          {item.question.split ('\n').map ((item, i) => <div key={i}>{item}</div>)}
          <form>
            <AnswerChoices
              AnswerArray={item.answers}
              index={index}
              answers={props.answers}
              handleRadio={props.handleRadio}
            />
          </form>
        </div>
      ))}


    </div>
  );
};

export default QuestionsMap;
