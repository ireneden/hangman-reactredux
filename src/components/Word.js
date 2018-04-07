import React from 'react'
import PropTypes from 'prop-types'


export class Word extends React.Component {

  constructor(props){
    super(props);
    this.word = Array.from(this.props.values[Math.floor(Math.random()*this.props.values.length)]);
  }

  render() {
    return (
      <div>
        {this.word.map((item, index) => (
            <span className='index' key={index}>_ </span> ))}
      </div>
    )
  }
}

export default Word
