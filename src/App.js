import React, { Component } from 'react';

import Header from './components/Header.js';
import ImageSection from './components/ImageSection.js';
import Recipe from './components/Recipe.js';
import IngredientList from './components/IngredientList.js';
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
        <ImageSection />
        <Recipe />
        <IngredientList />
        <Author />
        <Footer />
      </>
    );
  }
}
 
export default App;