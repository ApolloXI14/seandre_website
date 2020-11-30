import React, { Component } from 'react';

class Slide extends Component{
   render(){
   	return (
			<div className="fade">
				    <div className="numbertext">{this.props.index} / {this.props.length}</div>
				    	<img id="currentImg" src={this.props.imgSrc} style={{display: this.props.display}} />
				    <div className="text">{this.props.caption}</div>
		  	</div>
		  );
	}
}

export default Slide;