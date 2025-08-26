
import { Suspense } from "react";
import JournalEntryComp from "../../../components/JournalEntry";
import Navbar from "../../../components/Navbar";
import { getDocuments, getThreeDocuments } from '../../../serverFunctions.js';


export const dynamic = 'force-static'
export const dynamicParams = false;

export async function generateStaticParams({params}) {
  const viewArray = await params;
  const collectionName = viewArray[0].collectionName;
  const res = await getDocuments(collectionName);
  return (Array.isArray(res) && res || []).map( (journal, index) => {
    return { collectionName: collectionName, id: journal.baseCase }
  })
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default async function JournalEntry({params}) {
    const { collectionName, id } = await params;
    let currentEntryObj;
    let previousEntryObj;
    let nextEntryObj;
    const journalObj = await getThreeDocuments(collectionName, id ).then( (entries) => {
        return entries[0]; // using ".toArray()" on the "getThreeDocuments" aggregate for this makes the return formatted like this
    });
    nextEntryObj = journalObj?.nextMatch[0];
    previousEntryObj = journalObj?.lastMatch[0];

    // return Promise.allSettled([getJournalEntry( journalObj._id - 1 ), getJournalEntry( journalObj._id + 1 )]).then( (res) => {
    //       //console.log('allSettled res: ', res);
    //       previousEntryObj = res[0]?.value;
    //       nextEntryObj = res[1]?.value;
    //     })
    const prevEntryTitle = previousEntryObj?.baseCase || '';
    const nextEntryTitle = nextEntryObj?.baseCase || '';
    const html = journalObj?.content || '';
    return(
      	<div  id="journalEntryContainer">
            <Suspense fallback="{<Loading />}">
	      	<JournalEntryComp
                prevEntryTitle={prevEntryTitle}
                nextEntryTitle={nextEntryTitle}
                collectionName={collectionName}
                html={html}
	      	/>
	      	</Suspense>
	    </div>
      );
}
