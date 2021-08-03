import React, { Component } from 'react';

import '../reset.css';
import '../style.css';

class Ingredients extends Component {
    // state = {  }
    render() { 
        return (
            <section>
                <div className="ingredients">
                    <ul className="ingredient-list">
                        <li><input type="checkbox" /><label>1 1/2 cups milk</label></li>
                        <li><input type="checkbox" /><label>1/2 cup mascarpone</label></li>
                        <li><input type="checkbox" /><label>1/2 tsp pink salt</label></li>
                        <li><input type="checkbox" /><label>1 lb Black Mission Figs</label></li>
                        <li><input type="checkbox" /><label>1/2 cup brown sugar</label></li>
                        <li><input type="checkbox" /><label>2-4 tbsp water</label></li>
                    </ul>
                    <ul className="ingredient-list">
                        <li><input type="checkbox" /><label>1 1/2 cups heavy cream</label></li>
                        <li><input type="checkbox" /><label>1/3 cup granulated sugar</label></li>
                        <li><input type="checkbox" /><label>2 egg yolks</label></li>
                        <li><input type="checkbox" /><label>1 lemon, juiced</label></li>
                        <li><input type="checkbox" /><label>2 tbsp butter</label></li>
                        <li><input type="checkbox" /><label>1 cup honey roasted pecans, roughly chopped</label></li>
                    </ul>
                </div>
            </section>
        );
    }
}
 
export default Ingredients;