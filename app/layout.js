import React from "react";
import '../styles.css';

export const metadata = {
  title: 'Seandre\'s Site',
  description: 'Writing, music and thoughts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
