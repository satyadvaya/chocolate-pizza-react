import React, { Component } from 'react';

import printIcon from '../images/print-icon.png'
import chocoPizza from '../images/choco-pizza.png'

import '../reset.css';
import '../style.css';

class ImageSection extends Component {
    // state = {  }
    render() { 
        return (
            <section>
                <div class="dial-line"></div>
                <article>
                    <div className="article-head">
                        <div className="main-top-left">
                            <span>Chocolate Pizza</span>
                            <span>Posted on 15 Dec 2013 / Desserts</span>
                        </div>
                        <div className="main-top-right">
                            <img src={printIcon} alt="printer-icon" />
                            <span>Print</span>
                        </div>
                    </div>
                    <img src={chocoPizza} alt="chocolate pizza"></img>
                </article>
            </section>
        );
    }
}
 
export default ImageSection;