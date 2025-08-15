import React from "react";
import JournalEntryComp from "../../../components/JournalEntry";
import Navbar from "../../../components/Navbar";



async function getJournalEntry( title ) {
  console.log('fdskofjsdklfsd: ', title);
   return await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/api/' + (title ?  'journals/' + title : 'journals'), { next: { revalidate: 3600 }})
// const res = await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + 'journals', { next: { revalidate: 3600 }})
		.then(response => {
          if (response.status === 200) {
            console.log('200 success: ', response)
            return response.json()
          }
        }).catch(error => console.error('failed: ', error));
}

export async function generateStaticParams() {
  console.log('entry generateStaticParams');
  const res = await getJournalEntry();
  // const res = await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/api/journals', { next: { revalidate: 3600 }})
  console.log('RES: ', res);
  return (res || []).map( (journal, index) => {
    { id: journal.title?.replaceAll(" ", "-").toLowerCase() }
  })
}

export default async function JournalEntry({params}) {
  console.log('JournalEntry exec')
    const { id } = await params;
    const journalObj = await getJournalEntry( id ).then( (currentEntry) => {
        return currentEntry;
    });
    const previousEntryObj = await getJournalEntry( journalObj._id - 1 ).then( (prevEntry) => {
        return prevEntry;
    });
    const nextEntryObj = await getJournalEntry( journalObj._id + 1 ).then( (nextEntry) => {
        return nextEntry;
    });
    // return Promise.allSettled([getJournalEntry( journalObj._id - 1 ), getJournalEntry( journalObj._id + 1 )]).then( (res) => {
    //       //console.log('allSettled res: ', res);
    //       previousEntryObj = res[0]?.value;
    //       nextEntryObj = res[1]?.value;
    //     })
    const prevEntryTitle = previousEntryObj?.title?.replaceAll(" ", "-").toLowerCase() || '';
    const nextEntryTitle = nextEntryObj?.title?.replaceAll(" ", "-").toLowerCase() || '';
    const html = journalObj?.content;
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

