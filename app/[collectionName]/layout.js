'use server';

import React from "react";

const fetchCache = 'default-cache'

// TODO: Make a query to get collection names dynamically and generate
// them here, instead of hardcoding them
export async function generateStaticParams() {
  return [{collectionName: 'journals'}];
  //return [{collectionName: 'journals'}, {collectionName: 'stories'}];
}

export default async function JournalLayout({ children, params   }) {
  const {collectionName} = await params;
  return <section>{children}</section>
}
