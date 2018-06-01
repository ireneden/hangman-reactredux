import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class InputField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  newGuess(guesses) {
    this.props.dispatch({type: "NEW_GUESS", payload: this.state.value})
  }


  handleChange(event) {
    const {name, value} = event.target  
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit} className='inputfield'>
        <label>
         <h4>Choose a letter:</h4>
          <input name="guesses" type="text" value={this.state.guesses} onChange={this.handleChange} maxLength="1"/>
        </label>
        <button type="submit" className="hangman-button" >Submit!</button>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return {
      guesses: state.guesses,
  }
}
export default connect(mapStateToProps)(InputField)
