//'use server';

import {Suspense } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.scss';
import Home from '../components/Home'

import { getDocuments } from '../serverFunctions.js';

export const metadata = {
  title: "Seandre's Site"
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}


export default async function App() {
    const homeArray = await getDocuments("homes");
	return (
        <div>
          <Navbar />
          <div id="homeDiv">
            <Suspense fallback="{<Loading />}">
              <Home homeArray={homeArray || []}/>
            </Suspense>
          </div>
		</div>
	)
}

