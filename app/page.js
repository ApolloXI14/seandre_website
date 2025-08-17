//'use server';

import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.scss';
import Home from '../components/Home'

import { getHomes } from '../serverFunctions.js';

export const metadata = {
  title: "Seandre's Site"
}

export default async function App() {
     const homeArray = await getHomes();
	return (
        <div>
          <Navbar />
          <div id="homeDiv">
              <Home homeArray={homeArray || []}/>
          </div>
		</div>
	)
}

