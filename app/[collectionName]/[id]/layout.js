'use server';

import React from "react";
import { getDocuments } from '../../../serverFunctions.js';

// const dynamic = 'force-static'
// const dynamicParams = false;

export async function generateStaticParams({params: {collectionName}}) {
  const res = await getDocuments(collectionName);
  return (Array.isArray(res) && res || []).map( (journal, index) => {
    return { id: journal.title?.replaceAll(" ", "-").toLowerCase() }
  })
}

export default async function JournalEntryLayout({children, params}) {
    const { collectionName, id } = await params;
    return <section> {children} </section>
}
