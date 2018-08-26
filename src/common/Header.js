import React, { Component } from 'react';
import './Header.css';
import 'tachyons';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="/projects">Projects</a>
        <a href="/interests">Interests and Hobbies</a>
        <Link to='/about'><a href="/about">About</a></Link>
      </div>
    );
  }
}

export default Header;