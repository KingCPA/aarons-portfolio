import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import 'react-fontawesome'
import Header from './common/Header';
import About from './common/About';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hey! I'm Aaron and welcome :)</h1>
        </header>
        <Header />
        <About />
        <Content />
      </div>
    );
  }
}

export default App;
