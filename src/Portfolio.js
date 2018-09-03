import React, { Component } from 'react';
import './Portfolio.css';
import 'tachyons';
import kodflix from './Logo/kodflix.svg';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <div className="column">
                    <img src={kodflix} alt='logo' />
                    <p>Building the next Netflix with Kodflix: 
                        Tech used was - ReactJS, NodeJS, ExpressJS and MongoDB</p>
                </div>
                <div>
                    <p>Homeless and Hungry</p>
                    <p>With Homeless and Hungry, the technology used was: ReactJS, CSS3 and HTML5</p>
                    <li>Accomodation</li>
                    <li>Clothing</li>
                    <li>Washing</li>
                    <li>Medical</li>
                    <li>Help</li>
                    <li>Food</li>
                </div>
            </div>
        );
    }
}

export default Portfolio;