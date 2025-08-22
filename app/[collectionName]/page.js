import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from '../../styles/journalmenu.module.scss';
import { getDocuments } from '../../serverFunctions.js';

export default async function Journal({params}) {
  const {collectionName} = await params;
  const journals = await getDocuments(collectionName);
    return (
            <div>
                <Navbar />
                <div id={styles.journalMenuDiv}>
                  <ul>
                    <ul className={styles.listClass}>
                      {(journals || []).map((entry, index, array) => (
                        <li key={index++}><Link href={`${collectionName}/${entry.title?.replaceAll(" ", "-").toLowerCase()}`}>
                          {entry.title}</Link> - <cite>Published {entry.date?.toString().slice(2,4) + '/' + entry.date?.toString().slice(4,6) + '/' + entry.date?.toString().slice(0,2)}</cite></li>
                        ))}
                    </ul>
                    </ul>
                </div>
            </div>
    )
}
