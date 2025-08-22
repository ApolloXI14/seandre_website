//'use client'

import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/journalentry.module.scss";
import Link from "next/link";
import parse from "html-react-parser";

export default function JournalEntry({prevEntryTitle, nextEntryTitle, currentEntryId, html}) {
    return(
      	<div  id="journalEntryContainer">
			<Navbar/>
	      	<div id={styles['journalEntryDiv-flex']}>
	      		<div className={styles.previous}>
	      			{({prevEntryTitle}) &&
			    		<Link href={`/journals/${prevEntryTitle}`}>&#10094;</Link> ||
			    		<div><Link href="/journals">&#10094;</Link></div>
			    	 }
	      		</div>
		         <div id={styles.htmlDiv}>
		      		{parse(html)}
			    </div>
			    <div className={styles.nextBtn}>
			    	{({nextEntryTitle}) &&
			    		<div><Link  href={`/journals/${nextEntryTitle}`}>&#10095;</Link></div> ||
			    		<div><Link href="/journals">&#10095; </Link></div>
			    	 }
			    </div>
		    </div>
	    </div>

      );

}
