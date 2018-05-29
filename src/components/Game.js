import React, { Component } from 'react';
import {connect} from 'react-redux'
import Word from '../components/Word'
import InputField from '../components/InputField'
import ErrorCount from '../components/ErrorCount'
import {newGuess} from '../actions/game'

class Game extends Component {
    newGuess = (guesses) => {
    this.props.newGuess(guesses)
  }


  render() {
    return (
        <div className="App-main">
            <Word />
            <InputField onSubmit={this.newGuess} />
            <ErrorCount />
        </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		wordToGuess: state.wordToGuess,
        guesses: state.guesses
	}
}

export default connect(mapStateToProps, {newGuess})(Game)