import React, { useState, useEffect } from 'react';
import styles from '../styles/about.module.scss';

function Recaptcha({recaptchaKey}) {
	const [isClient, setIsClient] = useState(false);
	  useEffect(() => {
	    setIsClient(true)
	  }, [])
	  useEffect(() => {
	  const script = document.createElement('script');
	  script.src = "https://www.google.com/recaptcha/enterprise.js";
	  script.async = true;
	  script.defer = true;
	  document.body.appendChild(script);
		return () => {
				document.body.removeChild(script);
			}
	}, []);
	return ( 
		<div>
			<div className={styles.recaptchaDiv}>
				{isClient ? 'Never prerendered' :
					<div id="recaptcha" className="g-recaptcha" data-sitekey={recaptchaKey}></div>
				}
	    	</div>
			 
	    </div>
	)
}
export default Recaptcha;
