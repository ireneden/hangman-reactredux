import React, { Component } from 'react';
import './App.css';
import InputField from './components/InputField'
import NewGameButton from './components/NewGameButton'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="title">HANGMAN!</h1>
          <InputField />
          <NewGameButton />
      </div>
    );
  }
}

export default App;
