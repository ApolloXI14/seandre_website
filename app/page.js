import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.scss';
import Home from '../components/Home'


export const metadata = {
  title: "Seandre's Site"
}

async function getHomeArray() {
    const res = await fetch("http://localhost:5000/homes");
    const data = await res.json();
    return data;

}

export default async function App() {
    const homeArray = await getHomeArray();

	return (
        <div>
          <Navbar />
          <div id="homeDiv">
              <Home homeArray={homeArray}/>
          </div>
		</div>
	)
}

