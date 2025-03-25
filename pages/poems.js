import React, {useEffect, useState, useRef} from 'react';
import styles from '../styles/slideshow.module.scss'
import Image from 'next/image';
import Navbar from '../components/Navbar.js';

export default function Poems() {
    const scrollToTopRef = useRef(null);
    const [imgArray, setImgArray] = useState([]);
    const [currentIndex, setIndex] = useState(0);
  useEffect( (props) => {
    function importAll(req) {
        let images = [];
        req.keys().map((item, index) => {
          images.push(item.replace('./', '')); });
        return images;
    }
    const req = require.context(process.env.POEMS_DIR, true, /.jpg$|.png$/);
    const array = importAll(req);
    setImgArray(array);
  }, [])

  useEffect( () => { // ensure scroll to top occurs whenever "currentIndex" changes
    scrollToTopRef.current.scrollIntoView();
  }, [currentIndex]);

    const changeSlides = (index, isDotChange) => {
        function checkSlideLimit(slideIndex, slidesArrayLength) {
            if ((slideIndex + index) === -1) {
                return slidesArrayLength - 1;
            } else if ((slideIndex + index) > slidesArrayLength - 1) {
                return 0;
            } else {
                return slideIndex + index;
            }
        }
        setIndex(isDotChange ? index : checkSlideLimit(currentIndex, imgArray.length));
    }

    const currentSlide = (index) => {
        changeSlides(index, true);
    }

    return(
        <div>
            <Navbar />
            <div id="slideshowBody">
                <div ref={scrollToTopRef} id={styles.dotsDiv}>

                {imgArray.map((img, index, array) => (
                    <span key={index} className={styles.dot} onClick={currentSlide.bind(this, index, true)}></span>
                ))}

                </div>
                <div id="slideshow-container" className={styles['slideshow-container']}>

                <div id="slidesDiv">
                {imgArray.map((img, index, array) => (
                        <div key={index} className={styles.fade} style={{display: index === currentIndex ? 'block' : 'none'}}>
                          <div className={styles.numbertext}> {index+1}  / {array.length}</div>
                          <Image key={index} id={img} className={styles.currentImg} src={"/img/poems/" + img } alt={img} width="500" height="500"/>
                        </div>
                ))}
                </div>
              <div id={styles.slideshowButtons}>
                <a className={styles.prev} onClick={changeSlides.bind(this, -1, false)}>&#10094;</a>
                <a className={styles.next} onClick={changeSlides.bind(this, 1, false)}>&#10095;</a>
              </div>
            </div>

          </div>
        </div>
    )

}
