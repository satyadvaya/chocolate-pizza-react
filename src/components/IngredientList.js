import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';

import '../reset.css';
import '../style.css';

const measures = [
    {id: 1, amount: '1 1/2 cups ', name: 'milk'},
    {id: 2, amount: '1/2 cup ', name: 'mascarpone'},
    {id: 3, amount: '1/2 tsp ', name: 'pink salt'},
    {id: 4, amount: '1 lb ', name: 'Mission Figs'},
    {id: 5, amount: '1/2 cup ', name: 'brown sugar'},
    {id: 6, amount: '2-4 tbsp ', name: 'water'},
    {id: 7, amount: '1 1/2 cups ', name: 'heavy cream'},
    {id: 8, amount: '1/3 cup ', name: 'granulated sugar'},
    {id: 9, amount: '2 ', name: 'egg yolks'},
    {id: 10, amount: '1 ', name: 'lemon, juiced'},
    {id: 11, amount: '2 tbsp ', name: 'butter'},
    {id: 12, amount: '1 cup ', name: 'honey roasted pecans, roughly chopped'}
]

class IngredientList extends Component {
    // state = {  }
    render() { 
        return (
            <section>
                <div className="ingredients">
                    <ul className="ingredient-list">
                        {measures.map(item => {
                            return <IngredientItem amount={item.amount} name={item.name} />
                        })}
                        {/* <li><input type="checkbox" /><label>1 1/2 cups milk</label></li>
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
                        <li><input type="checkbox" /><label>1 cup honey roasted pecans, roughly chopped</label></li> */}
                    </ul>
                </div>
            </section>
        );
    }
}
 
export default IngredientList;