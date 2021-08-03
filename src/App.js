import React, { Component } from 'react';

import Header from './Header.js';
import Image from './Image.js';
import Author from './Author.js';
import Footer from './Footer.js';

class App extends Component {
  // state = {  }
  render() { 
    return (
      <>
        <Header />
        <Image />
        <Author />
        <Footer />
      </>
    );
  }
}
 
export default App;