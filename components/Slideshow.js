import React, { Component } from 'react';
import styles from '../less/Slideshow.less'
import SlideshowBody from './SlideshowBody';
import Slide from './Slide';
import ReactDOM from 'react-dom';

class Slideshow extends Component{
	constructor(props) {
	    super(props);
	    this.state = {slideIndex: 1,
	    			slidesArray:   [],
	    			imgPath: ''};
  	}

  	componentDidMount() {
  		function importAll(req) { // TODO: MOVE INTO OWN COMPONENT, THEN IMPORT
		    let images = [];
		    req.keys().map((item, index) => {
		    	images.push(req(item)); });
		    return images;
		}

		function checkSlideIndex(currentIndex, stateIndex) {
			if (currentIndex+1 === stateIndex) {
				return "block";
			} else {
				return "none";
			}
		}

		const req = require.context(POEMS_DIR, true, /.jpg$/);
  		const imgArray = importAll(req);
  		const imgSrcArray = imgArray.map((img) => img.default );
  		const slidesArray = imgArray.map((img, index) => 
				<Slide key={index} index={index+1} length={imgArray.length} imgSrc={imgSrcArray[index]} caption="test" display={checkSlideIndex(index, this.state.slideIndex)} />
			);
  		this.setState({
  			slidesArray: slidesArray
  		}, () => {
  			this.renderBody();
  		});
  	}

  	renderBody() {
  		ReactDOM.render(
  			<SlideshowBody slidesArray={this.state.slidesArray} />, document.getElementById('body'));
  		
  	}


  	SlideshowDot(index) {
		return (
			<span class="dot" onclick="currentSlide({index})"></span>
		);
	}

	SlideshowDotsList(props) {
		const imgArray = props.imgArray;
		const dotsArray = imgArray.map((img, index) => 
			<SlideshowDot index={index} />
		);
		return (
			{dotsArray}
		);
	}

  	render() {
  		return (
  			<div>
				<div id="body">
					
				</div>
				
			</div>
		);
  	}

}
export default Slideshow;