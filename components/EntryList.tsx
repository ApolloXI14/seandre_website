"use client";

// import React, {useEffect, useRef} from 'react';
import {useEffect, useRef} from 'react';
// import styles from '../styles/journalmenu.module.scss';
import Link from 'next/link';

export default function EntryListComp({list, collectionName}: {
    list: any,
    collectionName: string
}) {
    const scrollToTopRef : any = useRef(null);
    useEffect( () => {
        scrollToTopRef.current.scrollIntoView();
    }, []);
    return (
        <div ref={scrollToTopRef}>
            {(list || []).map((entry : any, index: number) => (
            <li key={index++}><Link href={`${collectionName}/${entry.baseCase}`}>
                {entry.title}</Link> - <cite>Published {entry.date?.toString().slice(2,4) + '/' + entry.date?.toString().slice(4,6) + '/' + entry.date?.toString().slice(0,2)}</cite></li>
            ))}
        </div>
    )

}
