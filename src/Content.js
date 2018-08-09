import React, { Component } from 'react';
import './Content.css';
import 'tachyons';

class Content extends Component {
  render() {
    return (
      <div className="container">
     <h3>Who am I?</h3>
     <p>My name is Aaron King and I am a Front-End Software Engineer,I am based in the South East of London.</p>
     <h3>Motivation</h3>
     <p>I love to code, I want to be able to put ideas into practice</p>
     <h3>Interests and Hobbies</h3>
     <p>I love Snooker and motorbikes, I have just chaged focus towards Harley Davidson</p>
    </div>
    );
  }
}

export default Content;
