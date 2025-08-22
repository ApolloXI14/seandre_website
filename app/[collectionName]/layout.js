'use server';

import React from "react";

import { getViews } from '../../serverFunctions.js';

const fetchCache = 'default-cache'

export async function generateStaticParams() {
  const res = await getViews();
  return res.map( (view) => {
    return [{collectionName: view._id}]
  })
}

export default async function JournalLayout({ children, params   }) {
  const {collectionName} = await params;
  return <section>{children}</section>
}
