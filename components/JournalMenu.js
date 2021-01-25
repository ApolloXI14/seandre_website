import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../less/JournalMenu.less';

class JournalMenu extends Component{
   render(){
    return (
      <div id="journalMenuDiv">
      <ul>
        <ul>
          {this.props.dataArray.map((entry, index) => (
            <li key={index++}><Link to={`journal/${index++}`}>{entry[0][0]}</Link> - <cite>Published {entry[0][1]}</cite></li>
            ))}
        </ul>
      </ul>
      </div>
      );
  }
}

export default JournalMenu;