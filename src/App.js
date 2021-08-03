import React, { Component } from 'react';

import Header from './Header.js';
import Image from './Image.js';
import Instructions from './Instructions';
import Author from './Author.js';
import Footer from './Footer.js';

class App extends Component {
  // state = {  }
  render() { 
    return (
      <>
        <Header />
        <Image />
        <Instructions />
        <Author />
        <Footer />
      </>
    );
  }
}
 
export default App;