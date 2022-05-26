import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from '../../styles/journalmenu.module.scss';

class Journal extends Component{
  constructor(props) {
    function getFileMetaData(str) {
      let strArr = str.split('__');
      let fileDate = strArr[0];
      fileDate = fileDate.replace('./', '');
      fileDate =  fileDate.slice(2,4) + '/' + fileDate.slice(4,6) + '/' + fileDate.slice(0,2);
      let fileName = strArr[1];
      fileName = fileName.replace('.txt', '');
      fileName = fileName.replace(/_/g, ' ');
      return [fileName, fileDate];
    }
    super(props);
    const reqVar = require.context(process.env.JOURNAL_DIR, true, /.txt$/);
    let files = [];
    reqVar.keys().map((item, index) => {
      files.push(getFileMetaData(item.replace('./', ''))); 
    });
    this.state = {
      fileNameArray: files.reverse() // reversed for descending dates
    };
  }
    render(){
      return (
        <div>
          <Navbar />
          <div id={styles.journalMenuDiv}>
            <ul>
              <ul className={styles.listClass}>
                {this.state.fileNameArray.map((entry, index, array) => (
                  <li key={index++}><Link href={`journal/${array.length - index}`}>{entry[0]}</Link> - <cite>Published {entry[1]}</cite></li>
                  ))}
              </ul>
            </ul>
        </div>
      </div>
      );
   }
}
export default Journal;
