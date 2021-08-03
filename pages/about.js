import React, { Component } from 'react';
import styles from '../styles/about.module.scss';
import Navbar from '../components/Navbar';

class About extends Component{
   render(){
      return(
        <div id={styles.aboutDiv}>
          <Navbar />
          <h1>About Me</h1>
          	<p>I remember building my first site on angelfire as a 90s kid, to share
my writing. It has been lost to time sadly, but that's why I made this
one! Using ReactJS/less instead of angelfire, though.  ;)</p>
            <p>Whatever brought you here, thank you. I'm but a humble
      daytime programmer from NYC who has always loved writing and music, and wants
      to share it. I am striving for weekend updates, so please check back
      every weekend if you're interested. If you want to give me some writing/site
      feedback or just say hello, feel free to email me at
      seandre.mc@gmail.com</p>
      <h2>Some random facts about me</h2>
      <ul>
        <li>Favorite authors: J.D. Salinger, James Baldwin</li>
        <li>Favorite composers: Yasunori Mitsuda, Erik Satie, Rachmaninoff</li>
        <li>Favorite video game: Xenogears</li>
        <li>Favorite flavor: Chocolate</li>
        <li>Favorite movie: Good Will Hunting</li>
      </ul>
		</div>
      );
   }
}
export default About;
