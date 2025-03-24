import React from "react";
import JournalEntryComp from "../../../components/JournalEntry";
import Navbar from "../../../components/Navbar";

export async function getJournalArray() {
    const res = await fetch("http://localhost:5000/journals")
		.then(response => {
          if (response.status === 200) {
            return response.json()
          }
        }).catch(error => console.error(error));
    return  res?.reverse(); // TODO: Remove reverse later by having DB query do this instead
}


export async function generateStaticParams() {
    return await getJournalArray().then( (res) => {
        return (res).map( (journal, index) => {
        { id: index }
      })
    } )



}

export default async function JournalEntry({params}) {
    const { id } = await params;
    const journalArray = await getJournalArray();
    const journalEntry = journalArray[id];
    const journalArrayLength = journalArray?.length-1;
    const html = journalEntry?.content;
    return(
      	<div  id="journalEntryContainer">
	      	<JournalEntryComp
                currentEntryId={Number(id)}
                html={html}
                journalArrayLength={journalArrayLength}
	      	/>
	    </div>
      );
}

