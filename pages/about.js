import React, {useEffect, useState, useReducer} from 'react';
import styles from '../styles/about.module.scss';
import Navbar from '../components/Navbar';
import emailjs from "emailjs-com";
import{ init } from '@emailjs/browser';
import Recaptcha from '../components/Recaptcha';

export default function About() {
    const [errorMessage, setError] = useState('');
    const [isSubmitted, submitForm] = useState(false);
    // "form" states are id/name attributes, which must match EmailJS template
    const [form, setFormValue] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [isValidObj, validateField] = useReducer((state, action) => {
      setError("");
      const value = action.value;
      switch (action.type) {
        case 'name': {
          return {
            ...state,
            name: {
              isValid: value === value.match(/\w+'?\w+\s?/g)?.reduce( (word, currentWord) => word = word.concat(currentWord), ''),
              errorMessage: 'Please correct the name',
              value: value
            }
          }
        } case 'email': {
          return {
            ...state,
            email: {
              isValid: value.match(/[\w+.]+@\w+.[a-z]{3}/) && value === value.match(/[\w+.]+@\w+.[a-z]{3}/)[0],
              errorMessage: 'Please format the email correctly',
              value: value
            }
          }
        }
        case 'message': {
          return {
            ...state,
            message: {
              isValid: value === value.match(/\w+.?\s?|\$\d+\s+.+|\(/g)?.reduce( (word, currentWord) => word = word.concat(currentWord), ''),
              errorMessage: 'Please remove invalid characters from the message.',
              value: value
            }
          }
        }
      }
    }, { // true by default to prevent error styling from rendering on load
      name: {
        isValid: true,
        errorMessage: '',
        value: ''
      },
      email: {
        isValid: true,
        errorMessage: '',
        value: ''
      },
      message: {
        isValid: true,
        errorMessage: '',
        value: ''
      }
    });

    const sendMail = (e) => {
        event.preventDefault(); // prevent form from submitting traditionally



      const isFormValid =
          // Map an array of regex search results on all fields for any character (.), to ensure nothing is empty
          Object.values(isValidObj).map( (obj) => { return obj.value.match(/./) } ).find( (array) => {
              return array === null;
          }) === undefined &&
          // Map an array of all "isValid" bools, and if they are all "true", form is valid
          Object.values(isValidObj).map( (obj) => { return obj.isValid } ).reduce( (a,b) => { return a === b && b === true } );
        if (isFormValid) {
          emailjs.sendForm('service_zs0nuqa', 'template_9yh8twt', document.getElementById('contact-form'), '68UreaEbAYt26Ojdg')
            .then(() => {
                submitForm(true);
                setError('false');
            }, (error) => { // TODO: Enhance error handling
                if (error.status === 400) {
                  setError('Please check the captcha checkbox');
                } else {
                  setError('Captcha has thrown an error: ', error.status);
                }
            });
        } else {
            setError('Please complete and correct all fields before sending')
        }

    }
    useEffect( () => {
        setFormValue({
          name: '',
          email: '',
          message: ''
        });
        init({
            publicKey: '68UreaEbAYt26Ojdg'
        });
    }, []);

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
            {/* generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                these IDs from the previous steps */}
              <input type="hidden" name="contact_number" value={Math.random() * 100000 | 0}/>
              {Object.keys(form || []).map( (key, index) => (
                         <div key={index} index={index} id={key + '-input'} className={styles.tooltip}>
                        {!isValidObj[key].isValid && <span className={styles.tooltiptext}>{isValidObj[key].errorMessage}</span>}
                          <label for="" id={!isValidObj[key].isValid && styles.errorDiv}>
                            {key.charAt(0).toUpperCase() + key.substring(1,key.length)}:
                          </label>
                          {key === 'message' &&
                            <textarea id={key} name={key} rows="4" cols="50" value={form[key]}
                              onChange={ (e) => setFormValue({...form, [key]: e.target.value})}
                              onBlur={(e) => validateField({type:e.target.id,value:e.target.value})}/>
                          }
                          {key !== 'message' && (
                              <input type="text" className={styles.tooltip} id={key} name={key} value={form[key]}
                                onChange={ (e) => setFormValue({...form, [key]: e.target.value})}
                                onBlur={(e) => validateField({type:e.target.id,value:e.target.value})}/>
                          )}
                        </div>

                      ))

                    }

              {errorMessage &&
                <div>
                  <h4 id={styles.errorDiv}>Error: {errorMessage}</h4>
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
