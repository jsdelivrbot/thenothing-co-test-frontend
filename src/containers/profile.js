import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

class About extends Component {
  componentWillMount() {
    this.props.fetchProfileInfo();
  }

  renderProfileInfo() {
    if (this.props.profileInfo)
      return <h2>Welcome, {this.props.profileInfo.email}!</h2>
    else
      return <div />
  }

  render() {
    return (
      <div>
        {this.renderProfileInfo()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profileInfo: state.app.profileInfo,
    profileInfoError: state.app.profileInfoError
  }
}

export default connect(mapStateToProps, actions)(About);
