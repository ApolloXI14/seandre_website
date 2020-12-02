import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';

class SlideshowBody extends Component {
	constructor(props) {
		super(props);
	}
	plusSlides(index) {
		console.log('plusSlides: ', index);
		this.setState({
			slideIndex: index
		});
	}
	checkSlideIndex(props) {
		this.props.slidesArray.forEach((slide, index) => {
			return this.props.slideIndex === index && "block";
		});
		return "none";
	}
	render() {
		const imgSrcArray = this.props.imgArray.map((img) => img.default );
		// TOFIX: this.checkSlideIndex.bind not getting hit
		const slidesArray = this.props.imgArray.map((img, index) => 
			<Slide key={index} index={index+1} length={imgSrcArray.length} 
				imgSrc={imgSrcArray[index]} caption="test"
				display={this.checkSlideIndex.bind(this)} />
		);
		return (
		<div id="slideshowBody">
			<div id="slideshow-container" className="slideshow-container">
				{slidesArray}
				<div id="slideshowButtons">
					<a className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
					<a className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>
				</div>
			</div>
		</div>
		)
	}
}

export default SlideshowBody;