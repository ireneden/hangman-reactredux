import React from 'react'
import PropTypes from 'prop-types'


class ErrorCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

    render() {
        return (
            <div>
                <h3>Error Count: {this.state.count}</h3>
            </div>
        )
    }
}


export default ErrorCount
