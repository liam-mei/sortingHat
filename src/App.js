import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuestionsContainer from "./components/QuestionsContainer";
import questionsData from "./Data/questionsData";
import { randomTopChoice, shuffle } from "./Data/functions";
// import QuestionsMap from "./components/QuestionsMap";
import HogwartsHouse from "./components/HogwartsHouse";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWelcome: true,
      answers: [
        "Gryffindor",
        "Gryffindor",
        "Gryffindor",
        "Slytherin",
        "Slytherin",
        "Slytherin"
      ],
      house: undefined,
      questionsData: [{ question: "", answers: [[]] }]
    };
  }

  componentDidMount = () => {
    let shuffledData = questionsData.map(item => {
      item.answers = shuffle(item.answers);
      return item;
    });
    this.setState({ questionsData: shuffledData });
  };

  toggle = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  handleRadio = e => {
    const newAnswers = this.state.answers;
    newAnswers[e.target.name] = e.target.value;
    this.setState(() => ({ answers: newAnswers }));
  };

  sort = () => {
    let rand = randomTopChoice(this.state.answers);
    this.setState({ house: rand });
  };

  render() {
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

        <button name="displayWelcome" value="" onClick={this.toggle}>
          Click to go Back
        </button>

        <QuestionsContainer
          answers={this.state.answers}
          handleRadio={this.handleRadio}
          className={!this.state.displayWelcome ? "basket hide" : "basket red"}
          questionsData={this.state.questionsData}
          sort={this.sort}
        />

        <HogwartsHouse house={this.state.house} />
      </div>
    );
  }
}

export default App;
