import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

class About extends Component {
  componentWillMount() {
    this.props.fetchInfo();
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: this.props.info}} />
        {this.props.error}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    info: state.app.info,
    error: state.app.error
  }
}

export default connect(mapStateToProps, actions)(About);
