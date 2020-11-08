import React, { Component } from 'react';
import styles from '../less/Navbar.less'

class Navbar extends Component{
   render(){
      return(
         <div class="navbar">
          <div><a href="#home">Home</a></div>
		  <div><a href="#news">News</a></div>
		  
			  <div class="dropdown">
			    <button class="dropbtn">Dropdown
			      <i class=""></i>
			    </button>
			    <div class="dropdown-content">
			      <a href="#">Link 1</a>
			      <a href="#">Link 2</a>
			      <a href="#">Link 3</a>
			    </div>
			  </div>
		
		</div>
      );
   }
}
export default Navbar;
