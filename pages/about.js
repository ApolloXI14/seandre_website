import React, {useEffect, useState, useReducer} from 'react';
import styles from '../styles/about.module.scss';
import Navbar from '../components/Navbar';
import emailjs from "emailjs-com";
import{ init } from '@emailjs/browser';
import Recaptcha from '../components/Recaptcha';

export default function About() {
    const [errorState, setError] = useState(false);
    const [isSubmitted, submitForm] = useState(false);
    const [form, setFormValue] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [isValidObj, validateField] = useReducer((state, action) => {
      const value = action.value;
      switch (action.type) {
        case 'name': {
          return {
            ...state,
            name: {
              isValid: value === value.match(/\w+'?\w+\s?/g)?.reduce( (word, currentWord) => word = word.concat(currentWord), ''),
              errorMessage: 'Please correct the name'
            }
          }
        } case 'email': {
          return {
            ...state,
            email: {
              isValid: value.match(/[\w+.]+@\w+.[a-z]{3}/) && value === value.match(/[\w+.]+@\w+.[a-z]{3}/)[0],
              errorMessage: 'Please format the email correctly'
            }
          }
        }
        case 'message': {
          return {
            ...state,
            message: {
              isValid: value === value.match(/\w+.?\s?|\$\d+\s+.+|\(/g)?.reduce( (word, currentWord) => word = word.concat(currentWord), ''),
              errorMessage: 'Please remove invalid characters from the message.'
            }
          }
        }
      }
    }, { // true by default to prevent error styling from rendering on load
      name: {
        isValid: true,
        errorMessage: ''
      },
      email: {
        isValid: true,
        errorMessage: ''
      },
      message: {
        isValid: true,
        errorMessage: ''
      }
    });

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
              {/* TODO: Make the form/error fields a loop */}
              <div id="name-input" className={styles.tooltip}>
              {!isValidObj.name.isValid && <span className={styles.tooltiptext}>{isValidObj.name.errorMessage}</span>}
                <label for="" id={!isValidObj.name.isValid && styles.errorDiv}>Name: </label>
                <input type="text" id="name" name="user_name" value={form.name}
                  onChange={ (e) => setFormValue({...form, name: e.target.value})}
                  onBlur={(e) => validateField({type:e.target.id,value:e.target.value})}/>
              </div>
              <div id="email-input" className={styles.tooltip}>
              {!isValidObj.email.isValid && <span className={styles.tooltiptext}>{isValidObj.email.errorMessage}</span>}
                <label id={!isValidObj.email.isValid && styles.errorDiv}>Email: </label>
                <input type="email" id="email" name="email" value={form.email}
                  onChange={ (e) => setFormValue({...form, email: e.target.value})}
                  onBlur={(e) => validateField({type:e.target.id,value:e.target.value})}/>
              </div>
              <div id="message-input" className={styles.tooltip}>
                {!isValidObj.message.isValid && <span className={styles.tooltiptext}>{isValidObj.message.errorMessage}</span>}
                <label id={!isValidObj.message.isValid && styles.errorDiv}>Message: </label>
                <textarea id="message" name="message" rows="4" cols="50" value={form.message}
                onChange={ (e) => setFormValue({...form, message: e.target.value})}
                onBlur={(e) => validateField({type:e.target.id,value:e.target.value})}></textarea>
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
