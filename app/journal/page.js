import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from '../../styles/journalmenu.module.scss';

export default async function Journal({journal}) {
    const journals = await fetch("http://localhost:5000/journals", { next: { revalidate: 3600 }})
		.then(response => {
          if (response.status === 200) {
            return response.json()
          }
        }).catch(error => console.error(error));
    return (
            <div>
                <Navbar />
                <div id={styles.journalMenuDiv}>
                  <ul>
                    <ul className={styles.listClass}>
                      {(journals || []).map((entry, index, array) => (
                        <li key={index++}><Link href={`journal/${entry.title.replaceAll(" ", "-").toLowerCase()}`}>
                          {entry.title}</Link> - <cite>Published {entry.date.toString().slice(2,4) + '/' + entry.date.toString().slice(4,6) + '/' + entry.date.toString().slice(0,2)}</cite></li>
                        ))}
                    </ul>
                    </ul>
                </div>
            </div>
    )
}
