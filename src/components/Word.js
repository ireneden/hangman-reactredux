import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


export class Word extends React.Component {
  static propTypes = {
    word: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
  return (
        <div>
          <h2>Guess the word!</h2>
          <h2>{this.props.wordToGuess}</h2>
        </div>
      )
    }
}

const mapStateToProps = ({ wordToGuess }) => ({ wordToGuess })

export default connect(mapStateToProps)(Word)
