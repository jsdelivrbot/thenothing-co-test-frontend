import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    return [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
    ];
  }

  render() {
    return (
      <nav className="header navbar navbar-light">
        <Link to="/" className="navbar-brand">Home</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About us</Link>
          </li>
          { this.renderLinks() }
        </ul>
      </nav>
    )
  }
}

export default connect()(Header);
