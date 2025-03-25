import React from "react";
import JournalEntryComp from "../../../components/JournalEntry";
import Navbar from "../../../components/Navbar";

export const dynamic = "force-static";

async function getJournalEntry(params = '') {
    const res = await fetch('http://localhost:5000/journals', {{ next: { revalidate: 3600 }}})
		.then(response => {
          if (response.status === 200) {
            return response.json()
          }
        }).catch(error => console.error(error));
    return  res?.reverse(); // TODO: Remove reverse later by having DB query do this instead
}

export async function generateStaticParams({params}) {
  const { id } = await params;
  const res = await getJournalEntry(id);
  return (res || []).map( (journal, index) => {
    { id: journal.title.replaceAll(" ", "-").toLowerCase() }
  })
}

export default async function JournalEntry({params}) {
    const { id } = await params;
    const journalArray = await getJournalEntry(id);
    const journalEntry = journalArray.find ( entry => {return entry.title.replaceAll(" ", "-").toLowerCase() === id } );
    const currentIndex = journalArray.findIndex ( entry => {return entry.title.replaceAll(" ", "-").toLowerCase() === id } );
    const prevEntryTitle = journalArray.find ( (entry, index) => {return index === currentIndex - 1 } )?.title.replaceAll(" ", "-").toLowerCase() || '';
    const nextEntryTitle = journalArray.find ( (entry, index) => {return index === currentIndex + 1 } )?.title.replaceAll(" ", "-").toLowerCase() || '';
    const journalArrayLength = journalArray?.length-1;
    const html = journalEntry?.content;
    return(
      	<div  id="journalEntryContainer">
	      	<JournalEntryComp
                prevEntryTitle={prevEntryTitle}
                nextEntryTitle={nextEntryTitle}
                currentEntryId={id}
                html={html}
                journalArrayLength={journalArrayLength}
	      	/>
	    </div>
      );
}

