import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from '../../styles/journalmenu.module.scss';
import axios from "axios";


export async function getStaticProps() {
	let journalArray = [];
	await axios.get("http://localhost:5000/journals")
		.then(response => {
			journalArray = response.data
		}).catch(error => console.error(error));
  	return {
  		props: {
  			journalArray: journalArray
  		}
  	}
}

const Journal = ({journalArray}) => {
    return (
            <div>
                <Navbar />
                <div id={styles.journalMenuDiv}>
                  <ul>
                    <ul className={styles.listClass}>
                      {journalArray.map((entry, index, array) => (
                        <li key={index++}><Link href={`journal/${array.length - index}`}>
                          {entry.title}</Link> - <cite>Published {entry.date.toString().slice(2,4) + '/' + entry.date.toString().slice(4,6) + '/' + entry.date.toString().slice(0,2)}</cite></li>
                        ))}
                    </ul>
                    </ul>
                </div>
            </div>
    )
}

export default Journal;
