import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';

class SlideshowBody extends Component {
	render() {
		return (
		<div id="slideshowBody">
			<div id="slideshow-container" className="slideshow-container">
			    SLIDESHOW COMPONENT
				{this.props.slidesArray}
			</div>
		</div>
		)
	}
}

export default SlideshowBody;