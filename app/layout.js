'use client'
import React from "react";
import '../styles.css';
import styles from '../styles/home.module.scss';

import { usePathname } from 'next/navigation'


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const bg = pathname.includes('about') ? 'aboutbg' : 'homebg';
  return (
    <html lang="en">
      <body className={styles[bg]}>{children}</body>
    </html>
  )
}
