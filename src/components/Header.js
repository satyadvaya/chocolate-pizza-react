import React, { Component } from 'react';

import logo from '../images/logo.png'
import fbIcon from '../images/fb-icon.png'
import twitIcon from '../images/twit-icon.png'
import gpIcon from '../images/gp-icon.png'
import instaIcon from '../images/insta-icon.png'
import flicIcon from '../images/flic-icon.png'
import pintIcon from '../images/pint-icon.png'
import rssIcon from '../images/rss-icon.png'
import mailIcon from '../images/mail-icon.png'

class Header extends Component {
  // state = {  }
  render() { 
    return (
        <header>
            <div className="header-left">
                <img className="fork-knife-logo1" src={logo} alt="A fork and knife" />
                <div className="header-text">
                    <span>Delicious</span>
                    <span>The best food blog on the web</span>
                </div>
            </div>

            <div>
                <ul>
                    <li><img src={fbIcon} alt="facebook icon" /></li>
                    <li><img src={twitIcon} alt="twitter icon" /></li>
                    <li><img src={gpIcon} alt="google plus icon" /></li>
                    <li><img src={flicIcon} alt="flicker icon" /></li>
                    <li><img src={instaIcon} alt="instagram icon" /></li>
                    <li><img src={pintIcon} alt="pinterest icon" /></li>
                    <li><img src={rssIcon} alt="rss icon" /></li>
                    <li><img src={mailIcon} alt="mail icon" /></li>
                </ul>
            </div>
        </header>
    );
  }
}
 
export default Header;