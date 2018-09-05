import React, { Component } from 'react';
import './Content.css';
import 'tachyons';

class Content extends Component {
  render() {
    return (
      <div className="container">
     <h3>Who am I?</h3>
     <p>My name is Aaron King and I am a Software Engineer, based in the South East of London.</p>
     <h3>Motivation</h3>
     <p>I love to code, I want to be able to put ideas into practice, 
       I also wanted to work with a team where we are making a real difference to the public</p>
     <h3>Interests and Hobbies</h3>
     <p>I love to learn new languages, I am very interested in blockchain. 
       I love Snooker and motorbikes, while I have always loved superbikes 
       I have now chaged focus towards Harley Davidson. 
       I am also interested in helping with mental health in the work place</p>
    </div>
    );
  }
}

export default Content;
