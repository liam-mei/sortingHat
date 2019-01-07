import React from "react";

// import { shuffle } from "../Data/functions";

export default (props) => {
  return (
    <div>
      {(props.AnswerArray).map((item, index) => {
        return (
          <div key={item[0]}>
          <span>{index+1}: </span>
             <label>
              <input
                type="radio"
                onChange={props.handleRadio}
                checked={props.answers[props.index] === item[0] && true}
                value={item[0]}
                name={props.index}
              />
              {item[1]}
            </label>
          </div>
        );
      })}
    </div>
  );
};