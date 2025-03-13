import React, { useState, useEffect } from 'react';
import styles from '../styles/about.module.scss';

function Recaptcha() {
	const [isClient, setIsClient] = useState(false);
	  useEffect(() => {
	    setIsClient(true)
	  }, [process.env.NEXT_PROD_FLAG === false])
	return ( 
		<div>
			<div className={styles.recaptchaDiv}>
		        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
				{isClient ? 'Never prerendered' :
					<div id="recaptcha" className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_V2_PUBLIC_KEY}></div>
				}
	    	</div>
			 
	    </div>
	)
}
export default Recaptcha;
