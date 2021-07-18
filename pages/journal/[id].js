// TODO: USE IMPORTDATA HERE TO GENERATE ARRAY OF WRAPPED COMPONENT JOURNAL ENTRIES
// THEN USE "ID" PARAM TO GET CORRECT ARRAY INDEX

import { useRouter } from 'next/router';
import React, { Component } from 'react';
// import { ImportData } from '../../components/ImportData';
import parse from 'html-react-parser';

function loadJournalEntries() {
	// const JournalEntryWithData = ImportData(JournalEntry, require.context(JOURNAL_DIR, true, /.txt$/));
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
	req.keys().map((fileName) => {
      entriesArray.push( [getFileMetaData(fileName), parse(req(fileName))]); 
  	});
  	console.log('entriesArray: ', entriesArray);
}


const JournalEntry = () => {
	loadJournalEntries();
  const router = useRouter();
  const { id } = router.query;

  return <p>JournalEntry: {id}</p>
}

export default JournalEntry;