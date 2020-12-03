import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';

class SlideshowBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slidesArray: [],
			slideIndex: this.props.slideIndex
		}
	}
	createSlidesArray(props) {
		const isCurrentIndex = (index, currentIndex) => { return index === currentIndex } ;
		const imgSrcArray = this.props.imgArray.map((img) => img.default );
		return this.props.imgArray.map((img, index) => 
			<Slide key={index} index={index+1} length={imgSrcArray.length} 
				imgSrc={imgSrcArray[index]} caption="test"
				display={isCurrentIndex(index+1, this.state.slideIndex) ? "block" : "none" } />
		);
	}
	componentDidMount(props) {
		const slidesArray = this.createSlidesArray(props);
		this.setState({
			slidesArray: slidesArray
		});
	}
	changeSlides(index) {
		function checkSlideLimit(slideIndex, slidesArrayLength) {
			if ((slideIndex + index) === 0) {
				return slidesArrayLength;
			} else if ((slideIndex + index) > slidesArrayLength) {
				return 1;
			} else {
				return slideIndex + index;
			}
			
		}
		this.setState( (state,props) => ({
			slideIndex: checkSlideLimit(state.slideIndex, state.slidesArray.length)
		}), () => {
			const newSlidesArray = this.createSlidesArray(this.state);
			this.setState((state, props) => ({
				slidesArray: newSlidesArray
			}));
		});
	}
	render() {
		return (
		<div id="slideshowBody">
			<div id="slideshow-container" className="slideshow-container">
				<div id="slidesDiv"> {this.state.slidesArray} </div>
				<div id="slideshowButtons">
					<a className="prev" onClick={this.changeSlides.bind(this, -1)}>&#10094;</a>
					<a className="next" onClick={this.changeSlides.bind(this, 1)}>&#10095;</a>
				</div>
			</div>	
		</div>
		)
	}
}

export default SlideshowBody;