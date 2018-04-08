import React from 'react'
import PropTypes from 'prop-types'
import { checkGuess } from '../lib/game'
import { connect } from 'react-redux'

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let letter = this.state.value;
    if (this.props.word.includes(letter)){
      alert('Correct letter');
      return letter;
    } else {
      alert('Wrong letter');
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='inputfield'>
        <label>
         Guess:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


const mapStateToProps = ({ word }) => ({ word })

export default connect(mapStateToProps)(InputField)
