'use server';

import React from "react";

const fetchCache = 'default-cache'


async function getJournalEntry() {
   return await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/api/journals', { next: { revalidate: 3600 }})
// const res = await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + 'journals', { next: { revalidate: 3600 }})
		.then(response => {
          if (response.status === 200) {
            return response.json()
          }
        }).catch(error => console.error(error));
}

export default async function JournalLayout({ children, params   }) {
  return <section>{children}</section>
}
