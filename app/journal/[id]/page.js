import React from "react";
import JournalEntryComp from "../../../components/JournalEntry";
import Navbar from "../../../components/Navbar";

export async function getJournalArray() {
    const res = await fetch("http://localhost:5000/journals")
		//.then(response => response.json()).catch(error => console.error(error));

    let journalArray = await res?.json();
    return  journalArray?.reverse(); // TODO: Remove reverse later by having DB query do this instead
}


export async function generateStaticParams() {
    return await getJournalArray().then( (res) => {
      return (res).map( (journal, index) => {
      return { id: (index).toString() }
    })
    } )

}

export default async function JournalEntry({params}) {
    const { id } = await params;
    const journalArray = await getJournalArray();
    const journalEntry = journalArray[Number(id)];
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

