import React, { Component } from 'react';
import styles from '../styles/slideshow.module.scss'
import Image from 'next/image';
import Navbar from '../components/Navbar.js';

export default class Poems extends Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      imgArray: [],
      currentIndex: 0
    }
  }
  currentSlide(index) {
    this.changeSlides(index, true);
  }
  changeSlides(index, isDotChange) {
    function checkSlideLimit(slideIndex, slidesArrayLength) {
      if ((slideIndex + index) === -1) {
        return slidesArrayLength - 1;
      } else if ((slideIndex + index) > slidesArrayLength - 1) {
        return 0;
      } else {
        return slideIndex + index;
      }
      
    }
    this.setState( (state,props) => ({
      currentIndex: isDotChange ? index : checkSlideLimit(state.currentIndex, state.imgArray.length)
    }), () => {
      this.myRef.current.scrollIntoView(); // ensure scroll to top occurs
    });
  }
  componentDidMount(props) {
    function importAll(req) {
        let images = [];
        req.keys().map((item, index) => {
          images.push(item.replace('./', '')); });
        return images;
    }
    const req = require.context(process.env.POEMS_DIR, true, /.jpg$|.png$/);
    const array = importAll(req);
    this.setState((state, props) => ({
      imgArray: array
    }));
  }

   render(){
      return(
         <div>
            <Navbar />
            <div id="slideshowBody">

                <div ref={this.myRef} id={styles.dotsDiv}>

                {this.state.imgArray.map((img, index, array) => (
                    <span key={index} className={styles.dot} onClick={this.currentSlide.bind(this, index, true)}></span>
                ))}

                </div>
                <div id="slideshow-container" className={styles['slideshow-container']}>

                <div id="slidesDiv">
                {this.state.imgArray.map((img, index, array) => (
                        <div key={index} className={styles.fade} style={{display: index === this.state.currentIndex ? 'block' : 'none'}}>
                          <div className={styles.numbertext}> {index+1}  / {array.length}</div>
                          <Image key={index} id="currentImg" className={styles.currentImg} src={"/img/poems/" + img }/>
                        </div>
                ))}
                </div>
              <div id={styles.slideshowButtons}>
                <a className={styles.prev} onClick={this.changeSlides.bind(this, -1, false)}>&#10094;</a>
                <a className={styles.next} onClick={this.changeSlides.bind(this, 1, false)}>&#10095;</a>
              </div>
            </div>  

          </div>
        </div>
      );
   }

}