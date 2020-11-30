import React, { Component } from 'react';
import styles from '../less/Slideshow.less'

export default class Slideshow extends Component{
	constructor(props) {
	    super(props);
	    this.state = {slideIndex: 1,
	    			imgArray: [],
	    			imgPath: ''};
  	}

  	componentDidMount() {
  		function importAll(req) {
		    let images = {};
		    req.keys().map((item, index) => { images[item.replace('./', '')] = req(item); });
		    return images;
		}

		const req = require.context(POEMS_DIR, true, /.jpg$/);
  		const imgArray = importAll(req);
  		this.setState({imgArray: imgArray}); // render imgArray
  	}


  	slideshowDot(index) {
		return (
			<span class="dot" onclick="currentSlide({index})"></span>
		);
	}

	slideshowDotsList(props) {
		const imgArray = props.imgArray;
		const dotsArray = imgArray.map((img, index) => 
			<slideshowDot index={index} />
		);
		return (
			{dotsArray}
		);
	}

	slideshow(props) {
		const imgArray = props.imgArray;
		const slidesArray = imgArray.map((img, index) => 
			<slide index={index} length={imgArray.length} img={img.img} caption={img.caption} />
		);
		return (
			{slidesArray}
			// <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
	  // 		<a class="next" onclick="plusSlides(1)">&#10095;</a>
		);
	}

	slide(props) {
		return (
			<div class="mySlides fade">
				    <div class="numbertext">{props.index} / {props.length}</div>
				    	<img src={props.img} style="width:100%" />
				    <div class="text">{props.caption}</div>
		  	</div>
		  );
		}

	slideshowBody(props) {
		return (
			<div class="slideshow-container">
				<slideshow imgArray={props.imgArray} />
			</div>
		);
	}

	slideshowFooter(props) { 
		return (
			<div style="text-align:center">
				<slideshowDotsList imgArray={props.imgArray} />
			</div>
		);
	}


  	render() {
  		return (
  			<div>
				<slideshowBody imgArray={this.props.imgArray} />
				<slideshowFooter imgArray={this.props.imgArray} />
			</div>
		);
  	}

}