import React, { useState, useEffect } from 'react';
import styles from '../styles/about.module.scss';

function Recaptcha({recaptchaKey}) {
	const [isClient, setIsClient] = useState(false);
	  useEffect(() => {
	    setIsClient(true)
	  }, [])
	return ( 
		<div>
			<div className={styles.recaptchaDiv}>
		        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
				{isClient ? 'Never prerendered' :
					<div id="recaptcha" className="g-recaptcha" data-sitekey={recaptchaKey}></div>
				}
	    	</div>
			 
	    </div>
	)
}
export default Recaptcha;
