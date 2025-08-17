'use server'

import React from "react";
import JournalEntryComp from "../../../components/JournalEntry";
import Navbar from "../../../components/Navbar";
import { getJournalEntry } from '../../../serverFunctions.js';


// async function getJournalEntry( title ) {
//    return await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/api/' + (title ?  'journals/' + title : 'journals'), { next: { revalidate: 3600 }})
// // const res = await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + 'journals', { next: { revalidate: 3600 }})
// 		.then(response => {
//           if (response.status === 200) {
//             return response.json()
//           }
//         }).catch(error => console.error(error));
// }

const dynamic = 'force-static'

export async function generateStaticParams({params}) {
  return (Array.isArray(params) && params || []).map( (journal, index) => {
    { id: journal.title?.replaceAll(" ", "-").toLowerCase() }
  })
}

export default async function JournalEntry({params}) {
    const { id } = await params;
    let previousEntryObj;
    let nextEntryObj;
    const journalObj = await getJournalEntry( id ).then( (currentEntry) => {
        return currentEntry;
    });
    if (journalObj) {
      previousEntryObj = await getJournalEntry( journalObj._id - 1 ).then( (prevEntry) => {
        return prevEntry;
    });
      nextEntryObj = await getJournalEntry( journalObj._id + 1 ).then( (nextEntry) => {
          return nextEntry;
      });
    }
    // return Promise.allSettled([getJournalEntry( journalObj._id - 1 ), getJournalEntry( journalObj._id + 1 )]).then( (res) => {
    //       //console.log('allSettled res: ', res);
    //       previousEntryObj = res[0]?.value;
    //       nextEntryObj = res[1]?.value;
    //     })
    const prevEntryTitle = previousEntryObj?.title?.replaceAll(" ", "-").toLowerCase() || '';
    const nextEntryTitle = nextEntryObj?.title?.replaceAll(" ", "-").toLowerCase() || '';
    const html = journalObj?.content || '';
    return(
      	<div  id="journalEntryContainer">
	      	<JournalEntryComp
                prevEntryTitle={prevEntryTitle}
                nextEntryTitle={nextEntryTitle}
                currentEntryId={id}
                html={html}
	      	/>
	    </div>
      );
}

