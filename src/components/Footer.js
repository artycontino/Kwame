// IMPORT REACT, AND COMPONENT
import React, { Component } from 'react';
import JSONData  from '../../json/recipe';
import '../index.css'; // IMPORT THE CSS FILE

//console.log('JSONData', JSONData)

class Footer extends Component {
  render() {
    return (
      <div>
      <nav class="nav">
          <p><b>More Recipes By John Doe</b></p>
            <ul class="nav">
                <li class="nav-item"><a class="btn btn-default" href="#">Tikka Masala</a></li>
                <li class="nav-item"> <a class="btn btn-default" href="#">Eggs Benedict</a></li>
                <li class="nav-item"> <a class="btn btn-default" href="#">Crawfish Etouffee</a></li>
                <li class="nav-item"> <a class="btn btn-default" href="#">Swedish Meatballs</a></li>
            </ul>
        </nav>
        <footer>Copyright &copy; General Assembly</footer>
      </div>
    )
  }
}

export default Footer;