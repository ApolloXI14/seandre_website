import React from "react";
import JournalEntryComp from "../../../components/JournalEntry";
import Navbar from "../../../components/Navbar";

export async function getJournalArray() {
    const res = await fetch("http://localhost:5000/journals")
		//.then(response => response.json()).catch(error => console.error(error));

    const journalArray = await res.json();
    return  journalArray.reverse(); // TODO: Remove reverse later by having DB query do this instead
}


export async function generateStaticParams() {
    const journalArray = await getJournalArray();
  return (journalArray).map( (journal, index) => {
      return { id: (index).toString() }
    })
}

export default async function JournalEntry({params}) {
    const journalArray = await getJournalArray();
    const journalEntry = journalArray[params?.id];
    const journalArrayLength = journalArray?.length-1;
    const html = journalEntry?.content;
    return(
      	<div  id="journalEntryContainer">
	      	<JournalEntryComp
                currentEntryId={Number(params.id)}
                html={html}
                journalArrayLength={journalArrayLength}
	      	/>
	    </div>
      );
}

