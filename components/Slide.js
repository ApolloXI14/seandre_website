import React, { Component } from 'react';

class Slide extends Component{
   render(){
   	return (
			<div class="mySlides fade">
				    <div class="numbertext">{this.props.index} / {this.props.length}</div>
				    	<img src={this.props.imgSrc} style="width:100%" />
				    <div class="text">{this.props.caption}</div>
		  	</div>
		  );
	}
}

export default Slide;