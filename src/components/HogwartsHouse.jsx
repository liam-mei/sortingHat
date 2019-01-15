import React from "react";

import houses from "../Data/houseDescriptions"

export default props => {
  return (
    <div className={props.house ? "basket" : "basket hide"}>
      <h1>{props.house && `You are a ${props.house}`}</h1>

      <br />

      {props.house && (
        <img className="house" src={require(`../Data/${props.house}.jpg`)} alt="" />
      )}

      <br />

      <div className="houses" >{houses[props.house]}</div>

      <button
        data-house={props.house}
        name="displayQuestions"
        onClick={props.toggle}
      >
        Click to Select New Answers
      </button>

      <br />

      <button
        name="displayWelcome"
        data-house={props.house}
        onClick={props.toggle}
      >
        Click to go to beginning
      </button>
    </div>
  );
};
