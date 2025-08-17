//'use server';

import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.scss';
import Home from '../components/Home'

import { getHomes } from '../serverFunctions.js';

export const metadata = {
  title: "Seandre's Site"
}

// async function getHomes() {
//   return await fetch(process.env.DB_HOST + ':' + process.env.DB_PORT  + "/api/homes", {next: {revalidate: 3600}})
//   .then(response => {
//   if (response.status === 200) {
//         return response.json();
//       }
//     }).catch(err => console.error(err));
// }

export default async function App() {
     const homeArray = await getHomes();
     console.log('homeArray: ', homeArray)
	return (
        <div>
          <Navbar />
          <div id="homeDiv">
              <Home homeArray={homeArray || []}/>
          </div>
		</div>
	)
}

