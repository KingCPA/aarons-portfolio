import React, { Component } from 'react';
import './About.css';
import 'tachyons';
import { SocialIcon } from 'react-social-icons';



class About extends Component {
  render() {
    return (
     <div className='socialMedia'>
     <SocialIcon color='black'url='https://www.linkedin.com/in/aaron-king-420266167/' />    
     <SocialIcon color='black'url='https://github.com/KingCPA' />  
     <SocialIcon color='black'url='https://twitter.com/yammyr62009' /> 
     </div>     
    );
  }
}

export default About;