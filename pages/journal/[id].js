import { useRouter } from 'next/router';
import React, { Component } from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import styles from '../../styles/journalentry.module.scss';

export async function getStaticProps() {
	function getFileMetaData(str) { // TODO: Export to own utility later, to de-duplicate
	    let strArr = str.split('__');
	    let fileDate = strArr[0];
	    fileDate = fileDate.replace('./', '');
	    fileDate =  fileDate.slice(2,4) + '/' + fileDate.slice(4,6) + '/' + fileDate.slice(0,2);
	    let fileName = strArr[1];
	    fileName = fileName.replace('.txt', '');
	    fileName = fileName.replace(/_/g, ' ');
	    return [fileName, fileDate];
	  }
	let entriesArray = [];
	const req = require.context(process.env.JOURNAL_DIR, true, /.txt$/);
	const reqMap = req.keys().map(async (fileName) => {
    entriesArray.push( [fileName, getFileMetaData(fileName)]); 
      return entriesArray;
  	});
  	return {
  		props: {
  			entriesArray: entriesArray.reverse() // reversed for descending dates
  		}
  	}
}

export async function getStaticPaths() {
	const req = require.context(process.env.JOURNAL_DIR, true, /.txt$/);
	const paths = req.keys().map((fileName, index) => {
      return {params: { id: (index).toString() }}
  	});
  	return { paths, fallback: false }
}


const JournalEntry = ({entriesArray}) => {
  const router = useRouter();
  const { id } = router.query;
  let entryFileName = entriesArray[id][0];
  let currentEntryId = Number(id);
  const req = require.context(process.env.JOURNAL_DIR, true, /.txt$/);
  let html = parse(req(entryFileName));
	// if (this.myRef && this.myRef.current) {
	// 	this.myRef.current.scrollIntoView();
	// } else {
	// 	this.myRef = React.createRef();
	// }

  //return <div id="journalEntryDiv">{html}</div>


  // <div><Link style={{textDecoration: "none"}} href="/journal">&#10094; <br/><p className="btnTxt">(Back)</p></Link></div>
  // <div><Link style={{textDecoration: "none"}} href="/journal">&#10095; <br/><p className="btnTxt">(End)</p></Link></div>



  return(
      	<div  id="journalEntryContainer">
	      	<div id={styles['journalEntryDiv-flex']}>
	      		<div className={styles.previous}>
	      			{(currentEntryId !== 0) ?
			    		<Link href={`/journal/${currentEntryId - 1}`}>&#10094;</Link> :
			    		<div><Link href="/journal">&#10094;</Link></div>
			    	 }
	      		</div>
		         <div id={styles.htmlDiv}>
		      		{html}
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