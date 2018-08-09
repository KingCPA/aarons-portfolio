import React, { Component } from 'react';
import './Portfolio.css';
import 'tachyons';
import kodflix from './Logo/kodflix.svg';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <div className="column">
                    <img src={kodflix} />
                    <p>Building the next Netflix with Kidflix: Tech used was - ReactJS, NodeJS, ExpressJS and MongoDB</p>
                </div>
            </div>
        );
    }
}

export default Portfolio;