import React, { Component } from 'react';

class Slide extends Component{
   render(){
   	return (
			<div className="fade" style={{display: this.props.display}}>
				    <div className="numbertext">{this.props.index} / {this.props.length}</div>
				    	<img id="currentImg" src={this.props.imgSrc} />
				    <div className="text">{this.props.caption}</div>
		  	</div>
		  );
	}
}

export default Slide;