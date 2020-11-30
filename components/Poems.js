import React, { Component } from 'react';
import Slideshow from './Slideshow';

export default class Poems extends Component{
   render(){
      return(
         <div>
          	POEMS Component
          	<Slideshow imgPath={POEMS_DIR} />
		</div>
      );
   }
}