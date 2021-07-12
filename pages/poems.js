import React, { Component } from 'react';
//import Slideshow from '../components/Slideshow';
import styles from '../styles/slideshow.module.scss'
import Image from 'next/image';
import Navbar from '../components/Navbar.js';

export default class Poems extends Component{
  constructor(props) {
    super(props);
    this.state = {
      imgArray: []
    }
  }
  changeSlides(index, isDotChange) {
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
      slideIndex: isDotChange ? index : checkSlideLimit(state.slideIndex, state.slidesArray.length)
    }), () => {
      const newSlidesArray = this.createSlidesArray(this.state);
      this.setState((state, props) => ({
        slidesArray: newSlidesArray
      }), () => {
        this.myRef.current.scrollIntoView(); // ensure scroll to top occurs
      });
    });
  }
  componentDidMount(props) {
    function importAll(req) {
        let images = [];
        req.keys().map((item, index) => {
          console.log('item: ', item);
          images.push(item.replace('./', '')); });
        return images;
    }
    const req = require.context(process.env.POEMS_DIR, true, /.jpg$|.png$/);
    const array = importAll(req);
    this.setState((state, props) => ({
      imgArray: array
    }));
    console.log('imgArray: ', this.state);
  }

   render(){
      return(
         <div>
            <Navbar />
            <div id="slideshowBody">
                <div ref={this.myRef} id="dotsDiv"></div>
                <div id="slideshow-container" className={styles['slideshow-container']}>

                <div id="slidesDiv">
                {this.state.imgArray.map((img, index, array) => (
                        <div className={styles.fade} style={{display: index === 0 ? 'block' : 'none'}}>
                          <div className={styles.numbertext}> {index+1}  / {array.length}</div>
                          <Image id="currentImg" src={"/img/poems/" + img }/>
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

// export default class Poems extends Component{
//    render(){
//       return(
//          <div>
//             <Image src="/img/poems/black_faces_sm.png"/>
//     </div>
//       );
//    }
// }