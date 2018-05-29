import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



class ErrorCount extends React.Component {
  
    render() {
        return (
            <div>
                 <h3>You have {this.props.counter} guesses left </h3>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(ErrorCount)