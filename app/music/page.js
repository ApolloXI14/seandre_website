'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/music.module.scss';

export default function Music() {
    return (
        <div id={styles.musicDiv}>
        <Navbar/>
        <h1>Music</h1>
        <h4>This is a page of my own music compositions.</h4>
            <div id="compositions-div">
                <p>Magic Kingdom</p>
                <audio controls>
                    <source src="/music/456_Magic Kingdom.wav" type="audio/wav"/>
                    Your browser does not support the audio element.
                </audio>
                <p>Skyscraping</p>
                <audio controls>
                    <source src="/music/684_Skyscraping.wav" type="audio/wav"/>
                    Your browser does not support the audio element.
                </audio>
                <p>Rising</p>
                <audio controls>
                    <source src="/music/570_Rising.mp3" type="audio/mp3"/>
                    Your browser does not support the audio element.
                </audio>
                <p>As I Watch the Sun Sink</p>
                <audio controls>
                    <source src="/music/737_As I Watch the Sun Sink.wav" type="audio/wav"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div> Copyright © Sean McHugh </div>
        </div>
    )
}
