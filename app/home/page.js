import React, {  useEffect, useState } from 'react';
import styles from '../styles/home.module.scss';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Image from 'next/image';
import axios from "axios";
import parse from 'html-react-parser';


export default async function Home() {
	// const [homeArray, setHomeArray] = useState([]);
	// useEffect( () => {
	// 	 axios.get("http://localhost:5000/homes")
 //          .then(response => {
 //            setHomeArray(response.data);
 //          })
 //          .catch(error => console.error(error));
	// }, []);

    const homeArray = await fetch("http://localhost:5000/homes").then(response => {
            homeArray = response;
          })
          .catch(error => console.error(error));

	return (
		<div id="homeDiv">
			{homeArray.map( (entry, index) => (
				<div className={styles.entryDiv} key={index}>
				<div className={styles['entryData-flex']}>
						<div className={styles.entryName}>{entry.title}</div><div className={styles.entryDate}>Dated: {entry.date.toString().slice(2,4) + '/' + entry.date.toString().slice(4,6) + '/' + entry.date.toString().slice(0,2)}</div>
				</div>
				<div className={styles.entryContent}>{parse(entry.content)}</div>
				<hr/>
			</div>
			))}
		</div>
	)
}
