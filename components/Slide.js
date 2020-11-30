import React, { Component } from 'react';

class Slide extends Component{
   render(){
   	return (
			<div className="mySlides fade">
				    <div className="numbertext">{this.props.index} / {this.props.length}</div>
				    	<img id="currentImg" src={this.props.imgSrc} />
				    <div className="text">{this.props.caption}</div>
		  	</div>
		  );
	}
}

export default Slide;