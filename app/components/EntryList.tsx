"use client";

import React, {useEffect, useRef} from 'react';
import styles from '../styles/journalmenu.module.scss';
import { Link } from 'react-router';

export function EntryListComp({list, collectionName}) {
    const scrollToTopRef = useRef(null);
    useEffect( () => {
        scrollToTopRef.current.scrollIntoView();
    }, []);
    return (
        <div id={styles.journalMenuDiv} ref={scrollToTopRef}>
            {(list || []).map((entry, index, array) => (
            <li key={index++}><Link to={`${entry.baseCase}`}>
                {entry.title}</Link> - <cite>Published {entry.date?.toString().slice(2,4) + '/' + entry.date?.toString().slice(4,6) + '/' + entry.date?.toString().slice(0,2)}</cite></li>
            ))}
        </div>
    )

}
