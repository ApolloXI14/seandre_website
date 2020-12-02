import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';

class SlideshowBody extends Component {
	render() {
		return (
		<div id="slideshowBody">
			<div id="slideshow-container" className="slideshow-container">
				{this.props.slidesArray}
				<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
				<a class="next" onclick="plusSlides(1)">&#10095;</a>
			</div>
		</div>
		)
	}
}

export default SlideshowBody;