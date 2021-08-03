import React, { Component } from 'react';

import Header from './components/Header.js';
import Image from './components/Image.js';
import Instructions from './components/Instructions';
import Ingredients from './components/Ingredients';
import Author from './components/Author.js';
import Footer from './components/Footer.js';

import './reset.css';
import './style.css';

class App extends Component {
  // state = {  }
  render() { 
    return (
      <>
        <Header />
        <Image />
        <Instructions />
        <Ingredients />
        <Author />
        <Footer />
      </>
    );
  }
}
 
export default App;