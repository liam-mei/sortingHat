import React from "react";



export default props => {
  return (
    <div className={!props.displayWelcome ? "displayNone" : undefined}>


      <img className="houses" src={require('../Data/houseFlags.png') } alt=""/>

      <br/>

      <button
        name="displayWelcome"
        value="displayQuestions"
        onClick={props.toggle}

      >
        Get Sorted!!!
      </button>
    </div>
  );
};
