// TODO: USE IMPORTDATA HERE TO GENERATE ARRAY OF WRAPPED COMPONENT JOURNAL ENTRIES
// THEN USE "ID" PARAM TO GET CORRECT ARRAY INDEX

import { useRouter } from 'next/router';
import React, { Component } from 'react';

const JournalEntry = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>JournalEntry: {id}</p>
}

export default JournalEntry