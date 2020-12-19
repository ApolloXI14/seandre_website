import React, { Component } from 'react';
import styles from '../less/Slideshow.less'
import SlideshowBody from './SlideshowBody';
import Slide from './Slide';
import ReactDOM from 'react-dom';

class Slideshow extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	slideIndex: 1,
	    	slidesArray:   []
	    };
  	}

  	componentDidMount() {
  		function importAll(req) { // TODO: MOVE INTO OWN COMPONENT, THEN IMPORT
		    let images = [];
		    req.keys().map((item, index) => {
		    	images.push(req(item)); });
		    return images;
		}

		const req = require.context(POEMS_DIR, true, /.jpg$|.png$/);
  		const imgArray = importAll(req);
  		this.renderBody(imgArray);
  	}

  	renderBody(imgArray) {
  		ReactDOM.render(
  			<SlideshowBody
  				imgArray={imgArray}
  				slideIndex={this.state.slideIndex}
  				slidesArray={this.state.slidesArray} />, document.getElementById('body'));
  		
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