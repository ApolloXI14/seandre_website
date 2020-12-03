import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';

class SlideshowBody extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(props) {
		const isCurrentIndex = (index, currentIndex) => { return index === currentIndex } ;
		const imgSrcArray = this.props.imgArray.map((img) => img.default );
		const slidesArray = this.props.imgArray.map((img, index) => 
			<Slide key={index} index={index+1} length={imgSrcArray.length} 
				imgSrc={imgSrcArray[index]} caption="test"
				display={isCurrentIndex(index+1, this.props.slideIndex) ? "block" : "none" } />
		);
		const SlideshowContainer = () => {
				return (
				<div id="slideshow-container" className="slideshow-container">
					{slidesArray}
					<div id="slideshowButtons">
						<a className="prev" onClick={this.changeSlides.bind(this, -1)}>&#10094;</a>
						<a className="next" onClick={this.changeSlides.bind(this, 1)}>&#10095;</a>
					</div>
				</div>
			);
		}
		ReactDOM.render(
  			<SlideshowContainer/>, document.getElementById('slideshowBody'));
	}
	changeSlides(index) {
		console.log('changeSlides: ', index);
		this.setState({
			slideIndex: index
		});
	}
	renderSlides(slidesArray) {
		const newSlidesArray = this.props.slidesArray.forEach((slide, index) => {
			if (index === this.props.slideIndex) {
				slidesArray[index].props.display = 'block';
			} else {
				slidesArray[index].props.display = 'none';
			}
		});
		this.setState({
			slidesArray: newSlidesArray
		});
	}
	render() {
		return (
		<div id="slideshowBody">
			
		</div>
		)
	}
}

export default SlideshowBody;