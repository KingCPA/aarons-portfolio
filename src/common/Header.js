import React, { Component } from 'react';
import './Header.css';
import 'tachyons';

class Header extends Component {
  render() {
    return (
        <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="/projects">Projects</a>
        <a href="/interests">Interests and Hobbies</a>
        <a href="/about">About</a>
      </div>
    );
  }
}

export default Header;