import React, { Component } from 'react';

import vanPic from '../images/van-pic.png'

import '../reset.css';
import '../style.css';

class Author extends Component {
    // state = {  }
    render() { 
        return (
            <section>
                <div className="dial-line"></div>

                <div className="author-bio">
                    <img src={vanPic} alt="vanessa selfie" />
                    <div className="span-container">
                        <span>Vanessa Stevenson</span>
                        <span>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
                    </div>
                    <button className="the-only-button">SHARE RECIPE</button>
                </div>
            </section>
        );
    }
}
 
export default Author;