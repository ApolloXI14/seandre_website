//import React from "react";
import styles from "../styles/journalentry.module.scss";
import Link from "next/link";
import parse from "html-react-parser";

export default function EntryComp({prevEntryTitle, nextEntryTitle, collectionName, html} : {
	prevEntryTitle?: string, nextEntryTitle?: string, collectionName: string, html: string
}) {

    return(
      	<div id="journalEntryContainer">
	      	<div id={styles['journalEntryDiv-flex']}>
	      		<div className={styles.previous}>
	      			{
			    		<div><Link href={prevEntryTitle ? `/${collectionName}/${prevEntryTitle}` : `/${collectionName}`}>&#10094;</Link></div>
			    	 }
	      		</div>
		         <div id={styles.htmlDiv}>
		      		{parse(html)}
			    </div>
			    <div className={styles.nextBtn}>
			    	{
			    		<div><Link href={nextEntryTitle ? `/${collectionName}/${nextEntryTitle}` : `/${collectionName}`}>&#10095;</Link></div>
			    	 }
			    </div>
		    </div>
		    <div id={styles['bottom-div']}>
		    <div> Copyright © Sean McHugh </div>
		    <div className={styles.backBtn}><Link href={`/${collectionName}`}>Back to {collectionName.charAt(0).toUpperCase() + collectionName.substring(1, collectionName.length)}</Link></div>
		    </div>
	    </div>

      );

}
