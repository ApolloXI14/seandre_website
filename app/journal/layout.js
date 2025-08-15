// TODO: Refactor layout to do "generateStaticParams", NOT [id]/page.js (top down approach)
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

import React from "react";

export const fetchCache = 'default-cache'


async function getJournalEntry( title ) {
   return await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/api/' + (title ?  'journals/' + title : 'journals'), { next: { revalidate: 3600 }})
// const res = await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + 'journals', { next: { revalidate: 3600 }})
		.then(response => {
          if (response.status === 200) {
            return response.json()
          }
        }).catch(error => console.error(error));
}

export async function generateStaticParams() {
  const res = await getJournalEntry();
  // const res = await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/api/journals', { next: { revalidate: 3600 }})
  return (res || []).map( (journal, index) => {
    { id: journal.title?.replaceAll(" ", "-").toLowerCase() }
  })
}

export default async function JournalLayout({ children, params   }) {
  return <section>{children}</section>
}
