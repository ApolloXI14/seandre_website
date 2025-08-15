// TODO: Refactor layout to do "generateStaticParams", NOT [id]/page.js (top down approach)
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

import React from "react";

export const fetchCache = 'default-cache'

export default async function JournalLayout({ children }) {
  return <section>{children}</section>
}
