import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/Navbar';
import EntryList from '../../components/EntryList';
import styles from '../../styles/journalmenu.module.scss';
import { getDocuments } from '../../serverFunctions.js';

export async function generateStaticParams({params}) {
  const arrayObj = await params;
  const collectionName = params[0]?.collectionName;
  return [{collectionName: collectionName}];
}

export default async function Journal({params}) {
  const arrayObj = await params;
  const collectionName = arrayObj.collectionName;
  const journals = await getDocuments(collectionName);
    return (
            <div>
                <Navbar />
                <div id={styles.journalMenuDiv}>
                  <ul>
                    <ul className={styles.listClass}>
                        <EntryList list={journals || []} collectionName={collectionName} />
                    </ul>
                    </ul>
                </div>
            </div>
    )
}
