import React from 'react';
import ReactDOM from 'react-dom';

function slideshowDot(props) {
	return (
		<span class="dot" onclick="currentSlide({props.index})"></span>
	);
}

function slideshowDotsList(props) {
	const imgArray = props.imgArray;
	const dotsArray = imgArray.map((img) => 
		<slideshowDot index={img.index} />
	);
	return (
		{dotsArray}
	);
}

function slideshow(props) {
	const imgArray = props.imgArray;
	const slidesArray = imgArray.map((img) => 
		<slide index={img.index} length={imgArray.length} img={img.img} caption={img.caption} />
	);
	return (
		{slidesArray}
		// <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  // 		<a class="next" onclick="plusSlides(1)">&#10095;</a>
	);
}

function slide(props) {
	return (
		<div class="mySlides fade">
			    <div class="numbertext">{props.index} / {props.length}</div>
			    	<img src={props.img} style="width:100%" />
			    <div class="text">{props.caption}</div>
	  	</div>
	  );
	}

const slideshowBody = (
	<div class="slideshow-container">
		<slideshow imgArray={imgArray} />
	</div>
);

const slideshowFooter = (
	<div style="text-align:center">
		<slideshowDotsList imgArray={imgArray} />
	</div>
);


ReactDOM.render(
<div>
	<slideshowBody imgArray={imgArray} />
	<slideshowFooter imgArray={imgArray} />
</div>, document.getElementById('root')
);