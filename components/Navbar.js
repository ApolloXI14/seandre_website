import React, { Component } from 'react';
import styles from '../less/Navbar.less'

class Navbar extends Component{
   render(){
      return(
         <div class="navbar">
          <div><a href="#home">Home</a></div>
		  <div><a href="#news">Music</a></div>
		  
			  <div class="dropdown">
			    <button class="dropbtn">Writing
			      <i class=""></i>
			    </button>
			    <div class="dropdown-content">
			      <a href="#">Short Stories</a>
			      <a href="#">Poems</a>
			      <a href="#">Blog</a>
			    </div>
			  </div>
		
		</div>
      );
   }
}
export default Navbar;
