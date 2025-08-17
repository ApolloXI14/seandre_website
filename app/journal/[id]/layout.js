'use server';

import React from "react";
import { getJournalEntry } from '../../../serverFunctions.js';

const dynamic = 'force-static'
const dynamicParams = false;

export async function generateStaticParams() {
  const res = await getJournalEntry();
  return (Array.isArray(res) && res || []).map( (journal, index) => {
    { id: journal.title?.replaceAll(" ", "-").toLowerCase() }
  })
}

export default async function JournalEntryLayout({children, params}) {
    const { id } = await params;
    return <section> {children} </section>
}
