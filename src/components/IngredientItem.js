import React, { Component } from 'react';

class IngredientItem extends Component {
    // state = {  }
    render() { 
        return (
            <li><input type="checkbox" /><label>{this.props.amount} {this.props.name}</label></li>
        );
    }
}
 
export default IngredientItem;