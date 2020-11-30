import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';

class SlideshowBody extends Component {
	render() {
		<div id="slideshowBody">
			<div id="slideshow-container" class="slideshow-container">
				{this.props.slidesArray}
			</div>
		</div>
	}
}

export default SlideshowBody;