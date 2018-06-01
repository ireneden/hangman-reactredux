import React, { Component } from 'react';
import './App.css';
import Game from './components/Game'


class App extends Component {
  render() {
    return (
      <div className="App">
          <img src="https://vignette.wikia.nocookie.net/scribblenauts/images/3/3e/Hangman_Female.png/revision/latest?cb=20130207191201" className="HangmanImage"/>
          <h1 className="title">HANGMAN-WANNABE</h1>
          <Game />
      </div>
    );
  }
}

export default App;
