import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/journalentry.module.scss";
import Link from "next/link";
import parse from "html-react-parser";

export default function JournalEntry({currentEntryId, html, journalArrayLength}) {
    return(
      	<div  id="journalEntryContainer">
			<Navbar/>
	      	<div id={styles['journalEntryDiv-flex']}>
	      		<div className={styles.previous}>
	      			{(currentEntryId !== 0) ?
			    		<Link href={`/journal/${currentEntryId - 1}`}>&#10094;</Link> :
			    		<div><Link href="/journal">&#10094;</Link></div>
			    	 }
	      		</div>
		         <div id={styles.htmlDiv}>
		      		{parse(html)}
			    </div>
			    <div className={styles.nextBtn}>
			    	{(currentEntryId !== journalArrayLength) ?
			    		<div><Link href={`/journal/${currentEntryId + 1}`}>&#10095;</Link></div> :
			    		<div><Link href="/journal">&#10095; </Link></div>
			    	 }
			    </div>
		    </div>
	    </div>

      );

}
