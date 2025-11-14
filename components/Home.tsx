'use client'

// import React from 'react';
import styles from '../styles/home.module.scss';
import parse from 'html-react-parser';
// import '../styles/styles.css';

// export async function loader({ params }) {
//   //                    ^? { categoryId: string; productId: string }
// }


export default function HomeComp({homeArray}: {homeArray: Array<any>[]}) {
    return (
		<div id="homeDiv">
			{homeArray.map( (entry : any, index: number) => (
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
