// TODO: USE IMPORTDATA HERE TO GENERATE ARRAY OF WRAPPED COMPONENT JOURNAL ENTRIES
// THEN USE "ID" PARAM TO GET CORRECT ARRAY INDEX

import { useRouter } from 'next/router';
import React, { Component } from 'react';
// import { ImportData } from '../../components/ImportData';
import parse from 'html-react-parser';

function loadJournalEntries() {
	// const JournalEntryWithData = ImportData(JournalEntry, require.context(JOURNAL_DIR, true, /.txt$/));
	
}

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
	console.log('parse: ', parse(req(fileName)));
	// TODO: Change the way HTML is rendered, because NextJS build throws error because of "parse(...)" in array
	//entriesArray.push( [getFileMetaData(fileName), parse(req(fileName))]); 
    entriesArray.push( [getFileMetaData(fileName)]); 
      return {
      	entriesArray
      }
  	});
  	console.log('entriesArray: ', entriesArray);
  	//return entriesArray;
  	return {
  		props: {
  			entriesArray: await Promise.all(reqMap)
  		}
  	}
}

export async function getStaticPaths() {
	const req = require.context(process.env.JOURNAL_DIR, true, /.txt$/);
	console.log('getStaticPaths test: ', req);
	const paths = req.keys().map((fileName, index) => {
      return {params: { id: (index++).toString() }}
  	});
  	console.log('getStaticPaths test 2: ', paths);
  	return { paths, fallback: false }
  // return {
  //   paths: [
  //     { params: { ... } } // See the "paths" section below
  //   ],
  //   fallback: false
  // };
}


const JournalEntry = ({entriesArray}) => {
  // const entriesArray = loadJournalEntries();
  // console.log('test: ', entriesArray);
  const router = useRouter();
  const { id } = router.query;
  // console.log('test2: ', entriesArray[id - 1]);
  let testVar = entriesArray[id - 1];
  console.log('testVar: ', testVar);
  //console.log('html: ', html);

  return <p>JournalEntry: {id}</p>
}

export default JournalEntry;