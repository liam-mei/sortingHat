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
          let answerNumber = "q" + index;
          // console.log('answerNumber: ',answerNumber)
          return (
            <div key={question.question} className="blue">
              <div>{question.question}</div>
              <form>
                <label>
                  <input
                    type="radio"
                    onChange={this.props.handleRadio}
                    checked={
                      this.props.answers[answerNumber] === "Grif" && true
                    }
                    value="Grif"
                    name={answerNumber}
                  />
                  {question.Grif}
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={this.props.handleRadio}
                    checked={this.props.answers[answerNumber] === "Sly" && true}
                    value="Sly"
                    name={answerNumber}
                  />
                  {question.Sly}
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={this.props.handleRadio}
                    checked={
                      this.props.answers[answerNumber] === "Huff" && true
                    }
                    value="Huff"
                    name={answerNumber}
                  />
                  {question.Huff}
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={this.props.handleRadio}
                    checked={
                      this.props.answers[answerNumber] === "Raven" && true
                    }
                    value="Raven"
                    name={answerNumber}
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
