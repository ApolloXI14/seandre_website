import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.scss';
import Home from '../components/Home'


export const metadata = {
  title: "Seandre's Site"
}

export default async function App() {
    const homeArray = await fetch(process.env.DB_HOST + process.env.DB_PORT + "homes", {next: {revalidate: 3600}})
		.then(response => {
          if (response.status === 200) {
            return response.json()
          }
        }).catch(error => console.error(error));
	return (
        <div>
          <Navbar />
          <div id="homeDiv">
              <Home homeArray={homeArray || []}/>
          </div>
		</div>
	)
}

