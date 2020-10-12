
/**
 * Gallery element class
 * 
 * @author Marius Tomas <marius@profis.lt>
 * @version 2.1.1, 2012-08-30
 * @param {Object} data
 */
function WB_Gallery(data) { this.__construct(data); }

WB_Gallery.prototype.elem = null;
WB_Gallery.prototype.type = "thumbs";
WB_Gallery.prototype.slideshowInterval = 10;
WB_Gallery.prototype.slideshowSpeed = 400;
WB_Gallery.prototype.images = [];
WB_Gallery.prototype.imageIndex = 0;
WB_Gallery.prototype.slideshowTimer = null;
WB_Gallery.prototype.displayedImage = null;
WB_Gallery.prototype.loadingImage = null;
WB_Gallery.prototype.listImgCont = null;
WB_Gallery.prototype.thumbImgCont = null;
WB_Gallery.prototype.fullThumbWidth = 0;
WB_Gallery.prototype.fullThumbHeight = 0;
WB_Gallery.prototype.thumbWidth = 64;
WB_Gallery.prototype.thumbHeight = 64;
WB_Gallery.prototype.columnWidth = 70;
WB_Gallery.prototype.rowHeight = 70;
WB_Gallery.prototype.thumbAlign = "left";
WB_Gallery.prototype.isFullWidth = false;
WB_Gallery.prototype.width = 320;
WB_Gallery.prototype.height = 240;
WB_Gallery.prototype.border = null;
WB_Gallery.prototype.borderWidths = null;
WB_Gallery.prototype.padding = null;
WB_Gallery.prototype.galleryPath = "";
WB_Gallery.prototype.imageCover = false;
WB_Gallery.prototype.showPictureCaption = "always";
WB_Gallery.prototype.displayedCaption = null;

/**
 * Construct gallery element
 * @param data gallery data object
 */
WB_Gallery.prototype.__construct = function(data) {
	this.elem = $("#" + data.id);
	this.slideshowTimer = null;
	this.id = data.id;
	this.type = data.type;
	this.thumbWidth = data.thumbWidth;
	this.thumbHeight = data.thumbHeight;
	this.columnWidth = data.columnWidth;
	this.rowHeight = data.rowHeight;
	this.thumbAlign = data.thumbAlign;
	this.slideshowInterval = data.interval;
	this.slideshowSpeed = data.speed;
	this.images = data.images;
	this.imageIndex = 0;
	this.border = data.border;
	this.borderWidths = data.borderWidths;
	this.padding = data.padding;
	this.isFullWidth = data.fullWidth;
	this.width = this.elem.width();
	this.height = this.elem.height();
	this.imageCover = data.imageCover;
	this.showPictureCaption = data.showPictureCaption;
	switch (this.type) {
		case "slideshow": this.renderSlideshow(); break;
		case "list": this.renderList(); break;
		case "masonry": this.renderMasonry(); break;
		default: this.renderThumbs(); break;
	}
};

WB_Gallery.prototype.renderThumbs = function() {
	this.displayedImage = null;
	this.loadingImage = null;
	var elem = null;
	this.elem.html(elem = $('<div class="wb-thumbs-only" style="width: 100%; height: 100%; overflow: auto;"></div>'));
	this.elem.css("text-align", this.thumbAlign);
	for (var i = 0; i < this.images.length; i++) {
		this.addImage(elem, this.images[i], i, false);
	}
};

WB_Gallery.prototype.renderSlideshow = function() {
	var thisClass = this;
	this.displayedImage = null;
	this.loadingImage = null;
	var cont = $(
		'<div class="gallery-slideshow">'+
			'<div class="gallery-slide-image" style="overflow: hidden;"></div>'+
			'<div class="gallery-slide-left"><i class="fa fa-chevron-left"></i></div>'+
			'<div class="gallery-slide-right"><i class="fa fa-chevron-right"></i></div>'+
		'</div>'
	);
	this.elem.html(cont);
	this.listImgCont = cont.children("div").eq(0);
	var larr = cont.children("div").eq(1);
	var rarr = cont.children("div").eq(2);

	larr.click(function() {
		thisClass.slideshowPrev();
	});

	rarr.click(function() {
		thisClass.slideshowNext();
	});

	$(window).on('resize', function() {
		var w = thisClass.elem.width(), h = thisClass.elem.height();
		if (w !== thisClass.width || h !== thisClass.height) {
			thisClass.width = w;
			thisClass.height = h;
			thisClass.displayImage(thisClass.listImgCont);
		}
	});
	if( this.slideshowInterval ) {
		this.slideshowTimer = setTimeout(function() {
			thisClass.slideshowNext();
		}, this.slideshowInterval * 1000);
	}
	else
		this.slideshowTimer = null;
	this.imageIndex = -1;
	this.slideshowNext();
};

WB_Gallery.prototype.renderList = function() {
	var thisClass = this;
	this.elem.empty();
	this.displayedImage = null;
	this.loadingImage = null;

	var w = this.width;
	var h = this.height;
	var tw = this.thumbWidth;
	var th = this.thumbHeight;

	//var pad = 3;
	
	var thumbcont = $('<div></div>');
	this.callback = function() {
		var img = thisClass.imageElems[thisClass.imageIndex];
		$(img.parentNode.parentNode.parentNode).children(".tmb-selected").removeClass("tmb-selected");
		$(img.parentNode.parentNode).addClass("tmb-selected");
	};
	this.imageElems = {};

	//var images = [];
	for (var i = 0; i < this.images.length; i++) {
		var img = this.addImage(thumbcont, this.images[i], i, true);
		img.idx = i;
		this.imageElems[img.idx] = img;
		$(img).css({cursor: "pointer"});
		$(img).click(function() {
			thisClass.imageIndex = this.idx;
			thisClass.displayImage(thisClass.listImgCont, thisClass.callback);
		});
		//var par_in = $(img.parentNode);
		var par = $(img.parentNode.parentNode);
		if (i === this.imageIndex) {
		   par.addClass("tmb-selected");
			tw = this.thumbWidth + 8;
			th = this.thumbHeight + 8;
  		}
	}

	this.fullThumbWidth = tw;
	this.fullThumbHeight = th;

	thumbcont.css({position: "absolute", left: "0", top: "5px", width: (tw * this.images.length) + "px", height: th + "px"});

	var galcont = $('<div></div>');
	galcont.css({position: "relative", width: w + "px", height: h + "px"});
	galcont.addClass("gallery-list");

	var imgcont = $('<div></div>');
	imgcont.css({position: "relative", width: w + "px", height: (h - th - 10) + "px", overflow: "hidden"});
	imgcont.addClass("gallery-list-image");

	var icon;

	var thumbdiv_in1 = document.createElement("DIV");
	$(thumbdiv_in1).css({position: "relative", "float": "left", width: "16px", height: (th + 10) + "px", cursor: "pointer"});
	thumbdiv_in1.className = "gallery-list-left";
	$(thumbdiv_in1).click(function() {
		thisClass.slideBy(-thisClass.fullThumbWidth * 3);
	});
	icon = document.createElement("I");
	icon.setAttribute("class", "fa fa-chevron-left");
	thumbdiv_in1.appendChild(icon);

	var thumbdiv_in2 = $('<div></div>');
	thumbdiv_in2.css({position: "relative", "float": "left", width: (w-32) + "px", height: (th + 10) + "px", overflow: "hidden"});
	thumbdiv_in2.addClass("gallery-list-thumbs");

	var thumbdiv_in3 = document.createElement("DIV");
	$(thumbdiv_in3).css({position: "relative", "float": "left", width: "16px", height: (th + 10) + "px", cursor: "pointer"});
	thumbdiv_in3.className = "gallery-list-right";
	$(thumbdiv_in3).click(function() {
		thisClass.slideBy(thisClass.fullThumbWidth * 3);
	});
	icon = document.createElement("I");
	icon.setAttribute("class", "fa fa-chevron-right");
	thumbdiv_in3.appendChild(icon);

	var thumbdiv = $('<div></div>');
	thumbdiv.css({position: "relative", width: w + "px", height: (th + 10) + "px", overflow: "hidden"});

	thumbdiv_in2.append(thumbcont);

	thumbdiv.append(thumbdiv_in1);
	thumbdiv.append(thumbdiv_in2);
	thumbdiv.append(thumbdiv_in3);

	galcont.append(imgcont);
	galcont.append(thumbdiv);
	
	$(window).on('resize', function() {
		var w = thisClass.elem.width(), h = thisClass.elem.height();
		if (w !== thisClass.width || h !== thisClass.height) {
			thisClass.width = w;
			thisClass.height = h;
			galcont.css({width: w, height: h});
			imgcont.css({width: w, height: (h - th - 10)});
			thumbdiv_in2.css({width: (w - 32)});
			thumbdiv.css({width: w});
			thisClass.displayImage(thisClass.listImgCont);
		}
	});

	this.listImgCont = imgcont;
	this.thumbImgCont = thumbdiv_in2;
	this.elem.append(galcont);
	// this.displayImage(this.listImgCont);
	
	if( this.slideshowInterval ) {
		this.slideshowTimer = setTimeout(function() {
			thisClass.slideshowNext(thisClass.callback);
		}, this.slideshowInterval * 1000);
	}
	else
		this.slideshowTimer = null;
	this.imageIndex = -1;
	this.slideshowNext(this.callback);
};

WB_Gallery.prototype.renderMasonry = function() {
	this.displayedImage = null;
	this.loadingImage = null;
	var elem = $('<div class="wb-masonry-items"/>');
	var cont = $('<div class="wb-masonry" style="width: 100%; height: 100%; overflow: auto;"/>');
	cont.append(elem);
	this.elem.append(cont);
	if( this.thumbAlign === "left" )
		elem.css("float", "left");
	else if( this.thumbAlign === "right" )
		elem.css("float", "right");
	else
		elem.css("margin", "0 auto");

	for (var i = 0; i < this.images.length; i++) {
		this.addImage(elem, this.images[i], i, false);
	}

	elem.masonry({
		itemSelector: ".wb_thumb",
		columnWidth: this.columnWidth,
		fitWidth: true/*,
		transitionDuration: 0 */
	});

	var thisClass = this;
	$(window).on('resize', function() {
		thisClass.elem.children().first().children().first().masonry();
	});
};

WB_Gallery.prototype.slideBy = function(delta) {
	var cont = $(this.thumbImgCont);
	var div = $(this.thumbImgCont).children("div").eq(0);
	var pos = div.position();
	var x = pos ? pos.left : 0;
	x -= delta;
	var minx = -(div.width() - cont.width());
	if( x < minx ) x = minx;
	if( x > 0 ) x = 0;
	div.animate({left: x + "px"});
};

WB_Gallery.prototype.calcImageStyles = function(displayCont, cont, image) {
	var bw, bh;
	var cover = this.isFullWidth || this.imageCover;
	if( cover ) {
		bw = bh = 0;
	}
	else if( typeof this.border === "object" && this.border.weight && typeof this.border.weight === "object" ) {
		bh = ((this.border.style[0] === "none") ? 0 : this.border.weight[0]) + ((this.border.style[2] === "none") ? 0 : this.border.weight[2]);
		bw = ((this.border.style[1] === "none") ? 0 : this.border.weight[1]) + ((this.border.style[3] === "none") ? 0 : this.border.weight[3]);
	}
	else {
		bw = ((this.border.style === "none") ? 0 : (this.border.weight * 2));
		bh = ((this.border.style === "none") ? 0 : (this.border.weight * 2));
	}

	var pad = cover ? 0 : this.padding;
	var maxWidth = (displayCont.innerWidth() - pad * 2 - bw);
	var maxHeight = (displayCont.innerHeight() - pad * 2 - bh);

	var w = image.width;
	var h = image.height;
	if (cover || w > maxWidth || h > maxHeight) { // One of these is larger than the window
		var ratio1 = w / maxWidth;
		var ratio2 = h / maxHeight;
		var ratio = cover ? Math.min(ratio1, ratio2) : Math.max(ratio1, ratio2);
		w = Math.floor(w / ratio);
		h = Math.floor(h / ratio);
	}
	return {
		left: Math.floor((maxWidth - w) / 2 + pad),
		top: Math.floor((maxHeight - h) / 2 + pad),
		image_width: w,
		image_height: h
	};
};

WB_Gallery.prototype.displayImage = function(display_cont, callback) {
	var thisClass = this;

	var image = this.images[this.imageIndex];
	if (!image) return;
	
	if (typeof callback == 'function') callback();
	var link = (this.type !== "thumbs" && this.type !== "masonry" && image.hasOwnProperty("link") && image.link) ? image.link : null;
	var cont = $(link ? "<a>" : "<div>");
	if( link ) {
		cont.attr("href", link.url);
		if( link.target )
			cont.attr("target", link.target);
	}
	var title = (image.hasOwnProperty("title") && image.title && image.title !== "") ? image.title : "";
	if( title === "" && link && link.name )
		title = link.name;
	cont.attr("title", title);
	cont.imageIndex = this.imageIndex;
	var jcont = cont;
	cont.addClass("gallery-image");
//	cont.css((this.isFullWidth || this.imageCover) ? {border: "none"} : this.border.css);

	var stl = this.calcImageStyles(display_cont, cont, image);

	var caption = $('<div class="wb-picture-caption"/>');
	if( !this.fillCaptionContainer(caption, image, false, true) )
		caption = null;
	else {
		if( this.showPictureCaption === "hover" )
			caption.addClass("wb-on-hover");
		caption.css({
			opacity: 0, // set initial opacity so that caption would fade in
			transition: "opacity " + (thisClass.slideshowSpeed / 1000).toFixed(3) + "s linear"
		});
	}

	jcont.css({
		display: "none",
		position: "absolute",
		left: stl.left + "px",
		top: stl.top + "px"
	});
	var img = new Image();
	cont.append(img);
	img.width = stl.image_width;
	img.height = stl.image_height;
	$(img).css({ width: stl.image_width, height: stl.image_height });
	$(img).css((this.isFullWidth || this.imageCover) ? {border: "none"} : this.border.css);
	img.alt = "";
	img.onload = function() {
		if (thisClass.displayedImage) {
			thisClass.displayedImage.fadeOut(thisClass.slideshowSpeed);
		}
		if (thisClass.displayedCaption) {
			thisClass.displayedCaption.css({
				opacity: 0,
				transition: "opacity " + (thisClass.slideshowSpeed / 1000).toFixed(3) + "s inear"
			});
			setTimeout((function() {
				this.remove();
			}).bind(thisClass.displayedCaption), thisClass.slideshowSpeed);
		}
		thisClass.displayedCaption = caption;
		jcont.fadeIn(thisClass.slideshowSpeed, function() {
			if (thisClass.displayedImage) {
				thisClass.displayedImage.remove();
			}
			if (cont.parent() && cont.parent().size()) {
				thisClass.displayedImage = cont;
			} else {
				thisClass.displayedImage = null;
			}
			thisClass.loadingImage = null;
			if (thisClass.slideshowTimer) {
			   clearTimeout(thisClass.slideshowTimer);
				if( thisClass.slideshowInterval ) {
					thisClass.slideshowTimer = setTimeout(function(){
						thisClass.slideshowNext(thisClass.callback);
					}, thisClass.slideshowInterval * 1000);
				}
				else
					thisClass.slideshowTimer = null;
			}
		});
	};
	display_cont.append(cont);

	if( caption ) {
		display_cont.append(caption);
		setTimeout((function() {
			this.css("opacity", ""); // Reset opacity to one in css rules on the next frame
		}).bind(caption), 0);
		setTimeout((function() {
			this.css("transition", ""); // Reset transition to one in css rules after fade in has finished
		}).bind(caption), thisClass.slideshowSpeed);
	}

	this.loadingImage = cont;
	img.src = image.image;
	if( !link )
		this.initImageLightBox(img, this.imageIndex);
};

WB_Gallery.prototype.initImageLightBox = function(img, imageIndex) {
	var lightBoxElem = $('body > .pswp').get(0);
	var thisSelf = this;
	$(img)
		.css({cursor: "pointer"})
		.on("click touchstart touchend touchmove", function(e) {
			if (e.type === 'touchstart') {
				$(this).data('pswpDisabled', false);
			} else if (e.type === 'touchmove') {
				$(this).data('pswpDisabled', true);
			}
			if ((e.type === 'click' || e.type === 'touchend') && !$(this).data('pswpDisabled')) {
				var images = [];
				for( var i = 0, il = thisSelf.images.length; i < il; i++ ) {
					var image = thisSelf.images[i];
					var title = image.hasOwnProperty("title") ? image.title : null;
					images.push({
						src: image.image,
						w: image.width,
						h: image.height,
						/* do not use thumb because it has different size proportions
						 * comparing to original image. This leads to glitchy effect
						 * original image appearing in photoswipe.
						 */
						// msrc: image.thumb
						msrc: null,
						title: (title === null || title === "") ? "- wb-untitled -" : title, // title must not be empty if we want to see the caption block at all
						link: (image.hasOwnProperty("link") && image.link) ? image.link : null,
						description: image.hasOwnProperty("description") ? image.description : null
					});
				}
				(new PhotoSwipe(lightBoxElem, PhotoSwipeUI_Default, images, {
					index: imageIndex,
					addCaptionHTMLFn: function(item, captionElement, isFake) {
						var $cont = $(captionElement.children[0]);
						$cont.empty();
						return thisSelf.fillCaptionContainer($cont, item, true, true);
					}
				})).init();
			}
		});
};

WB_Gallery.prototype.slideshowNext = function(callback) {
	if (this.images.length === 0) return;
	this.imageIndex++;
	if (this.imageIndex >= this.images.length) {
		this.imageIndex = 0;
	}
	this.displayImage(this.elem.children().first().children().first(), callback);
};

WB_Gallery.prototype.slideshowPrev = function(callback) {
	if (this.images.length === 0) return;
	this.imageIndex--;
	if (this.imageIndex < 0) {
		this.imageIndex = this.images.length - 1;
	}
	this.displayImage(this.elem.children().first().children().first(), callback);
};

WB_Gallery.prototype.addImage = function(cont, image, imageIndex, nolightbox) {
	var isThumbsOnlyMode = (this.type === "thumbs" || this.type === "masonry");
	var link = (isThumbsOnlyMode && image.hasOwnProperty("link") && image.link) ? image.link : null;
	var div = $(link ? "<a/>" : "<div/>");
	if( link ) {
		div.attr("href", link.url);
		if( link.target )
			div.attr("target", link.target);
	}
	div.addClass("wb_thumb");

	var bdiv = $("<div/>");

	var img = document.createElement("IMG");
	img.src = image.thumb;
	if( image.image === image.thumb ) {
		var w = image.width;
		var h = image.height;
		var k, th;
		if( this.type === 'masonry' ) {
			k = w / this.thumbWidth;
		}
		else {
			var k1 = w / this.thumbWidth;
			var k2 = h / this.thumbHeight;
			k = Math.min(k1, k2);
		}
		if( !k )
			k = 1;
		w = w / k;
		h = h / k;
		th = (this.type === 'masonry') ? h : this.thumbHeight;
		img.width = w;
		img.height = h;
		$(img).css({position: "absolute", left: (this.thumbWidth - w) / 2, top: (th - h) / 2});
		bdiv.css({position: "relative", "box-sizing": "content-box", width: this.thumbWidth, height: th, overflow: "hidden"});
	}
	else {
		img.width = this.thumbWidth;
		if( this.type === 'masonry' && image.width )
			img.height = Math.round(this.thumbWidth * image.height / image.width);
		else
			img.height = this.thumbHeight;
	}
	var title = (image.hasOwnProperty("title") && image.title && image.title !== "") ? image.title : "";
	if( title === "" && link && link.name )
		title = link.name;
	div.attr("title", title);
	img.alt = title;
	$(img).css({zIndex: "1"});
	if (!nolightbox && !link) {
		this.initImageLightBox(img, imageIndex);
	}
	if ((this.type === 'thumbs' || this.type === 'masonry') && this.border && this.border.css) {
		bdiv.css(this.border.css);
	}
	bdiv.append(img);
	if( isThumbsOnlyMode && this.thumbWidth >= 100 ) {
		var descDiv = $('<div class="wb-picture-caption"/>');
		if( this.fillCaptionContainer(descDiv, image, false, false) ) {
			descDiv.css({ // +3 because of the fixed padding
				left: this.borderWidths[3] + 3,
				right: this.borderWidths[1] + 3,
				bottom: this.borderWidths[2] + 3
			});
			if( this.showPictureCaption === "hover" )
				descDiv.addClass("wb-on-hover");
			bdiv.append(descDiv);
		}
	}
	div.append(bdiv);
	cont.append(div);
	return img;
};

WB_Gallery.prototype.fillCaptionContainer = function($cont, item, createLink, createDescription) {
	var title = (item.title === "- wb-untitled -") ? "" : item.title;
	var link = createLink ? item.link : null;
	var titleVisible = title !== "" || link;
	var descriptionVisible = createDescription && item.description && item.description !== "";
	if( !titleVisible && !descriptionVisible )
		return false;
	if( titleVisible ) {
		var $title = $('<h3 class="wb-lightbox-title">');
		var text = (title !== "") ? title : link.name;
		var $text = link ? $('<a>').attr("href", link.url).attr("target", link.target).text(text) : document.createTextNode(text);
		$title.append($text);
		$cont.append($title);
	}
	if( descriptionVisible ) {
		$cont.append($('<div class="wb-lightbox-description">').text(item.description));
	}
	return true;
};