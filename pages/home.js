import React, {  useEffect, useState } from 'react';
import styles from '../styles/home.module.scss';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Image from 'next/image';
import axios from "axios";
import parse from 'html-react-parser';

export default function Home() {
	const [homeArray, setHomeArray] = useState([]);
	useEffect( () => {
		 axios.get("http://localhost:5000/homes")
          .then(response => {
            setHomeArray(response.data);
          })
          .catch(error => console.error(error));
	}, []);

	return (
		<div id="homeDiv">
			{homeArray.map( (entry, index) => (
				<div className={styles.entryDiv} key={index}>
				<div className={styles['entryData-flex']}>
						<div className={styles.entryName}>{entry.title}</div><div className={styles.entryDate}>Dated: {entry.date}</div>
				</div>
				<div className={styles.entryContent}>{parse(entry.content)}</div>
				<hr/>
			</div>
			))}
		</div>
	)
}
