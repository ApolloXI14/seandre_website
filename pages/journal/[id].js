import { useRouter } from 'next/router';
import React, { Component } from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from '../../styles/journalentry.module.scss';
import axios from "axios";

export async function getStaticProps() {
	let entriesArray = [];
	// TODO: Make "dateSort" param actually work
	await axios.get("http://localhost:5000/journals", {dateSort: 1})
		.then(response => {
			// TODO: Reversing as temporary workaround to make DESCENDING date journal/index list API call match pre-rendered pages (journal list should make DESCENDING date call but [id] should be ASCENDING)
			entriesArray = response.data.reverse();
		}).catch(error => console.error(error));
  	return {
  		props: {
  			entriesArray: entriesArray
  		}
  	}
}

export async function getStaticPaths() {
	let paths = [];
	await axios.get("http://localhost:5000/journals")
		.then(response => {
			paths = response.data.map((journal, index) => {
				return {params: { id: (index).toString() }}
			});
		}).catch(error => console.error(error));

  	return { paths, fallback: false }
}


const JournalEntry = ({entriesArray}) => {
  const router = useRouter();
  const { id } = router.query;
  let currentEntryId = Number(id);
  let html = entriesArray[currentEntryId].content;

  //return <div id="journalEntryDiv">{html}</div>

  // <div><Link style={{textDecoration: "none"}} href="/journal">&#10094; <br/><p className="btnTxt">(Back)</p></Link></div>
  // <div><Link style={{textDecoration: "none"}} href="/journal">&#10095; <br/><p className="btnTxt">(End)</p></Link></div>

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
			    	{(currentEntryId !== entriesArray.length - 1) ?
			    		<div><Link href={`/journal/${currentEntryId + 1}`}>&#10095;</Link></div> :
			    		<div><Link href="/journal">&#10095; </Link></div>
			    	 }
			    </div>
		    </div>
	    </div>

      );
}

export default JournalEntry;
