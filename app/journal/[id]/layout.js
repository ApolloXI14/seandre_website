'use server';

import React from "react";
import { getJournals } from '../../../serverFunctions.js';

// const dynamic = 'force-static'
// const dynamicParams = false;

export async function generateStaticParams() {
  const res = await getJournals();
  return (Array.isArray(res) && res || []).map( (journal, index) => {
    return { id: journal.title?.replaceAll(" ", "-").toLowerCase() }
  })
}

export default async function JournalEntryLayout({children, params}) {
    const { id } = await params;
    return <section> {children} </section>
}
