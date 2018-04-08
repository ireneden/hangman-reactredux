import React, { Component } from 'react';
import './App.css';
import InputField from './components/InputField'
import NewGameButton from './components/NewGameButton'
import Word from './components/Word'
import ErrorCount from './components/ErrorCount'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="title">HANGMAN!</h1>
          <Word />
          <InputField store={this.props.store}/>
          <ErrorCount />
          <NewGameButton />
      </div>
    );
  }
}

export default App;
