// IMPORT REACT, AND COMPONENT
import React, { Component } from 'react';
import JSONData  from '../../json/recipe';
import '../index.css'; // IMPORT THE CSS FILE

//console.log('JSONData', JSONData)

class Picture extends Component {
  render() {
    return (
      <div>
        <article>
          <img id="food_image" src="./media/tikka.jpg" alt="" class="img-thumbnail"></img>
        </article>
      </div>
    )
  }
}

export default Picture;