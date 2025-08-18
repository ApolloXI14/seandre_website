
import { Suspense } from "react";
import JournalEntryComp from "../../../components/JournalEntry";
import Navbar from "../../../components/Navbar";
import { getJournals, getJournalEntry } from '../../../serverFunctions.js';


export const dynamic = 'force-static'
export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await getJournals();
  return (Array.isArray(res) && res || []).map( (journal, index) => {
    return { id: journal.title?.replaceAll(" ", "-").toLowerCase() }
  })
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
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
            <Suspense fallback="{<Loading />}">
	      	<JournalEntryComp
                prevEntryTitle={prevEntryTitle}
                nextEntryTitle={nextEntryTitle}
                currentEntryId={id}
                html={html}
	      	/>
	      	</Suspense>
	    </div>
      );
}

