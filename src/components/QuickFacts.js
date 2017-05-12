// IMPORT REACT, AND COMPONENT
import React, { Component } from 'react';
import JSONData  from '../../json/recipe';
import '../index.css'; // IMPORT THE CSS FILE

//console.log('JSONData', JSONData)

class QuickFacts extends Component {
  render() {
    return (
      <div>
        <ul id="recipe_meta_data" class="list-group">
          <li class="list-group-item">Active: 1 Hour</li>
          <li class="list-group-item">Total: 5 Hours</li>
          <li class="list-group-item">6 Servings</li>
        </ul>
      </div>
    )
  }
}

export default QuickFacts;