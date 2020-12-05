import React, { Component } from 'react';
import Slideshow from './Slideshow';

export default class Poems extends Component{
   render(){
      return(
         <div>
          	<Slideshow imgPath={POEMS_DIR} />
          	<footer>
          		<p>© 2020 Sean McHugh</p>
          	</footer>
		</div>
      );
   }
}