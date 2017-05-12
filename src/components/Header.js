// IMPORT REACT, AND COMPONENT
import React, { Component } from 'react';
import JSONData  from '../../json/recipe'
import '../index.css'; // IMPORT THE CSS FILE

//console.log('JSONData', JSONData)

class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <h1>CHICKEN TIKKA MASALA</h1>
            <cite class="contributors">
            <div>By John Doe</div>
            </cite>
        </header>
      </div>
    )
  }
}

export default Header;