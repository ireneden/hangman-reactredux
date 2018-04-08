import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createGame } from '../actions/game'

export class NewGameButton extends React.Component {

  static propTypes = {
    createGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.createGame()
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="NewGameButton">
        New Game
      </button>
    )
  }
}

export default connect(null, { createGame })(NewGameButton)
