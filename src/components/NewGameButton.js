import React from 'react'
import PropTypes from 'prop-types'

export class NewGameButton extends React.Component {

  handleClick = () => {
     alert("New game created")
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

export default NewGameButton
