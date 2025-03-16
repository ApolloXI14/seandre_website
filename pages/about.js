import React, {useEffect, useState} from 'react';
import styles from '../styles/about.module.scss';
import Navbar from '../components/Navbar';
import emailjs from "emailjs-com";
import{ init } from '@emailjs/browser';
import Recaptcha from '../components/Recaptcha';

export default function About() {
    const [errorState, setError] = useState(false);
    const [isSubmitted, submitForm] = useState(false);
    const toggleError = () => {
        setError(true);
    }
    const sendMail = (e) => {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_zs0nuqa', 'template_9yh8twt', document.getElementById('contact-form'), '68UreaEbAYt26Ojdg')
            .then(() => {
                submitForm(true);
                setError(false);
            }, (error) => { // TODO: Enhance error handling
                setError(error.status)
            });
    }
    useEffect( () => {
        init({
            publicKey: '68UreaEbAYt26Ojdg'
        });
    }, [])

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
        <form id="contact-form" className={styles.contactForm} method="post">
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
              <Recaptcha
                  recaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_V2_PUBLIC_KEY}
                  isClient={process.env.NEXT_PROD_FLAG}
                  suppressHydrationWarning
              />
              <div id="button-div">
                <input type="submit" value='Send' onClick={sendMail.bind(this)} />
              </div>
            </div>
          }
        </form>
  		</div>
    )
}
