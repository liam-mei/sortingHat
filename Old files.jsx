sort = () => {
    let { answers } = this.state;
    let count = {};

    for (let i = 0; i < Object.keys(answers).length; i++) {
      count.hasOwnProperty(answers["q" + i])
        ? count[answers["q" + i]]++
        : (count[answers["q" + i]] = 1);
    }

    let countArray = Object.entries(count);
    countArray.sort((a, b) => (a[1] > b[1] ? -1 : 1));

    let topScore = countArray[0][1];
    let topArray = [];
    for (let i = 0; i < countArray.length; i++) {
      if (countArray[i][1] === topScore) {
        topArray.push(countArray[i]);
      } else {
        break;
      }
    }

    let rand = topArray[Math.floor(Math.random() * topArray.length)];
    this.setState({ house: rand[0] });
  };


  import React, { Component } from "react";

import questions from "../Data/Questions";

export default class QuestionsMap extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {questions.map((question, index) => {
          // let index = "q" + index;
          // console.log('index: ',index)
          return (
            <div key={question.question} className="blue">
              <div>{question.question}</div>
              <form>
                <label>
                  <input
                    type="radio"
                    onChange={this.props.handleRadio}
                    checked={
                      this.props.answers[index] === "Grif" && true
                    }
                    value="Grif"
                    name={index}
                  />
                  {question.Grif}
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={this.props.handleRadio}
                    checked={this.props.answers[index] === "Sly" && true}
                    value="Sly"
                    name={index}
                  />
                  {question.Sly}
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={this.props.handleRadio}
                    checked={
                      this.props.answers[index] === "Huff" && true
                    }
                    value="Huff"
                    name={index}
                  />
                  {question.Huff}
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={this.props.handleRadio}
                    checked={
                      this.props.answers[index] === "Raven" && true
                    }
                    value="Raven"
                    name={index}
                  />
                  {question.Raven}
                </label>
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}


      // answers: {
      //   q0: "Grif",
      //   q1: "Raven",
      //   q2: "Raven",
      //   q3: "Raven",
      //   q4: "Raven",
      //   q5: "Raven"
      // },


// about to refactor sort
sort = () => {
  let { answers } = this.state;
  let count = {};

  for (let i = 0; i < answers.length; i++) {
    count.hasOwnProperty(answers[i])
      ? count[answers[i]]++
      : (count[answers[i]] = 1);
  }

  let countArray = Object.entries(count);
  countArray.sort((a, b) => (a[1] > b[1] ? -1 : 1));

  let topScore = countArray[0][1];
  let topArray = [];
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i][1] === topScore) {
      topArray.push(countArray[i]);
    } else {
      break;
    }
  }

  let rand = topArray[Math.floor(Math.random() * topArray.length)];

  this.setState({ house: rand[0] });
};