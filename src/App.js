import React, { Component } from "react";
import "./App.css";
import QuestionsContainer from "./components/QuestionsContainer";
import questionsData from "./Data/questionsData";
import { randomTopChoice, shuffle } from "./Data/functions";
import HogwartsHouse from "./components/HogwartsHouse";
import WelcomePage from "./components/WelcomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWelcome: true,
      displayQuestions: false,
      displayResults: false,
      answers: [
        "Gryffindor",
        "Gryffindor",
        "Gryffindor",
        "Slytherin",
        "Slytherin",
        "Slytherin",
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
    console.log(e.target.dataset);
    this.setState({
      [e.target.name]: !this.state[e.target.name],
      [e.target.value]: !this.state[e.target.value],
      house: undefined
    });
  };

  handleRadio = e => {
    const newAnswers = this.state.answers;
    newAnswers[e.target.name] = e.target.value;
    this.setState(() => ({ answers: newAnswers }));
  };

  sort = () => {
    let rand = randomTopChoice(this.state.answers);
    this.setState({ house: rand, displayQuestions: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="sortingHat App-logo" src={require('./Data/Sorting_Hat.png')} alt=""/>
          <h1 className="App-title">Welcome to Hogwarts Sorting Room</h1>
          <img className="sortingHat App-logo" src={require('./Data/Sorting_Hat.png')} alt=""/>
        </header>

        <WelcomePage
          toggle={this.toggle}
          displayWelcome={this.state.displayWelcome}
          displayQuestions={this.state.displayQuestions}
        />

        <QuestionsContainer
          handleRadio={this.handleRadio}
          questionsData={this.state.questionsData}
          answers={this.state.answers}
          className={this.state.displayQuestions ? `basket` : "basket hide red"}
          sort={this.sort}
          house={this.state.house}
        />

        <HogwartsHouse
          house={this.state.house}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default App;
