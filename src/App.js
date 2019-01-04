import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuestionsContainer from "./components/QuestionsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWelcome: true,
      answers: {
        q0: "Grif",
        q1: "Raven",
        q2: "Raven",
        q3: "Raven",
        q4: "Raven",
        q5: "Raven"
      },
      house: undefined
    };
  }

  handleWelcome = () => {
    this.setState({ displayWelcome: !this.state.displayWelcome });
  };

  handleRadio = e => {
    const newAnswers = this.state.answers;
    newAnswers[e.target.name] = e.target.value;
    this.setState(() => ({ answers: newAnswers }));
  };

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

  render() {
    const { answers } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hogwarts</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button
          onClick={this.handleWelcome}
          className={!this.state.displayWelcome ? "basket hide" : "basket"}
        >
          button 3
        </button>

        <button onClick={this.handleWelcome}>Click to go Back</button>

        <QuestionsContainer
          answers={this.state.answers}
          handleRadio={this.handleRadio}
          className={!this.state.displayWelcome ? "basket hide" : "basket red"}
        />
        <button
          className={
            answers.q0 &&
            answers.q1 &&
            answers.q2 &&
            answers.q3 &&
            answers.q4 &&
            answers.q5
              ? "basket"
              : "basket hide"
          }
          onClick={this.sort}
        >
          SORT!!!
        </button>
        <div>{this.state.house && `You are a ${this.state.house}`}</div>
      </div>
    );
  }
}

export default App;
