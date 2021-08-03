import React, { Component } from 'react';

import logo from './images/logo.png'

class Footer extends Component {
    // state = {  }
    render() { 
        return (
            <footer>
                <div className="fork-knife-line">
                    <hr />
                    <img className="fork-knife-logo-footer" src={logo} alt="fork-knife-logo" />
                </div>
                <div className="delicious">
                    <span>Delicious &#169 2013 &#8226 All Rights Reserved.</span>
                    <span>Proudly published with Ghost.</span>
                </div>
            </footer>
        );
    }
}
 
export default Footer;