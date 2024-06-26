import React, { Component } from 'react';
import styles from '../styles/about.module.scss';
import Navbar from '../components/Navbar';
import emailjs from "emailjs-com";
import{ init } from '@emailjs/browser';

class About extends Component{
  constructor(props) {
    super(props);
    this.sendMail = this.sendMail.bind(this);
    this.state = {
      errorState: false,
      isSubmitted: false
    };
  }
  componentDidMount(props) {
    init('user_AoX7PJ11jTjaXT3oOuQVB');
  }
  toggleError(props) {
    console.log('toggleError: ', props);
    this.setState({
      errorState: true
    });
  }
  sendMail(e) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    //this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_6swa1a2', 'template_9yh8twt', document.getElementById('contact-form'), 'user_AoX7PJ11jTjaXT3oOuQVB')
        .then(() => {
            this.setState({
              isSubmitted: true,
              errorState: false
            });
        }, (error) => {
          this.setState({
            errorState: error.status
          });
        }).bind(this);
  }
  render(){
      var isSubmitted = this.state.isSubmitted;
      var errorState = this.state.errorState;
      return(
        <div id={styles.aboutDiv}>
          <Navbar />
          <h1>About Me</h1>
          	<p>I remember building my first site on angelfire as a 90s kid, to share my writing. It has been lost to time sadly, but that&apos;s why I made this
one! Using ReactJS/less instead of angelfire, though.  ;)</p>
            <p>Whatever brought you here, thank you. I&apos;m but a humble
      daytime programmer from NYC who has always loved writing and music, and wants
      to share it. I am striving for weekend updates, so please check back
      every weekend if you&apos;re interested.</p>
      <h2>Some random facts about me</h2>
      <ul>
        <li>Favorite authors: J.D. Salinger, James Baldwin</li>
        <li>Favorite composers: Yasunori Mitsuda, Erik Satie, Rachmaninoff</li>
        <li>Favorite video game: Xenogears</li>
        <li>Favorite flavor: Chocolate</li>
        <li>Favorite movie: Good Will Hunting</li>
      </ul>
      <p id={styles.formDescription}>Want to give me some writing/site
      feedback or just say hello? Fill out the form below and I&apos;ll respond if/when I can. I read and appreciate all messages!</p>
        <form id="contact-form" className={styles.contactForm}>
            {isSubmitted ?
              <h4 id={styles.successDiv}>Thank you for your message!</h4>            
            :
            <div id="formBody">
              <input type="hidden" name="contact_number" value={Math.random() * 100000 | 0}/>
              <div id="name-input">
                <label for="">Name: </label>
                <input type="text" id="user_name" name="user_name"/>
              </div>
              <div id="email-input">
                <label>Email: </label>
                <input type="email" id="user_email" name="user_email"/>
              </div>
              <div id="message-input">
                <label>Message: </label>
                <textarea id="message" name="message" rows="4" cols="50"></textarea>
              </div>
              {errorState &&
                <div>
                  <h4 id={styles.errorDiv}>Error: Please check the captcha checkbox</h4>
                </div>
              }
              <div className={styles.recaptchaDiv}>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                <div id="recaptcha" className="g-recaptcha" data-sitekey="6LfJ_HMgAAAAALHgR6Ng1BJ8MYqm7oZ1BM0yxsM2"></div>
              </div>
              <div id="button-div">
                <input type="submit" value='Send' onClick={this.sendMail.bind()}/>
              </div>
            </div>
          }
        </form>
  		</div>
      );
   }
}
export default About;
