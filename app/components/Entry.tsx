import React from "react";
import styles from "../styles/journalentry.module.scss";
import { Link } from "react-router";
import parse from "html-react-parser";

export function EntryComp({prevEntryTitle, nextEntryTitle, collectionName, html}) {
    return(
      	<div id="journalEntryContainer">
	      	<div id={styles['journalEntryDiv-flex']}>
	      		<div className={styles.previous}>
	      			{({prevEntryTitle}) &&
			    		<Link to={`/${collectionName}/${prevEntryTitle}`}>&#10094;</Link> ||
			    		<div><Link to={`/${collectionName}/`}>&#10094;</Link></div>
			    	 }
	      		</div>
		         <div id={styles.htmlDiv}>
		      		{parse(html)}
			    </div>
			    <div className={styles.nextBtn}>
			    	{({nextEntryTitle}) &&
			    		<div><Link to={`/${collectionName}/${nextEntryTitle}`}>&#10095;</Link></div> ||
			    		<div><Link to={`/${collectionName}`}>&#10095; </Link></div>
			    	 }
			    </div>
		    </div>
		    <div id={styles['bottom-div']}>
		    <div> Copyright © Sean McHugh </div>
		    <div className={styles.backBtn}><Link to={`/${collectionName}`}>Back to {collectionName.charAt(0).toUpperCase() + collectionName.substring(1, collectionName.length)}</Link></div>
		    </div>
	    </div>

      );

}
