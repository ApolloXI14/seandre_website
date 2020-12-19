import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../less/JournalMenu.less';

class JournalMenu extends Component{
   render(){
    return (
      <div id="journalMenuDiv">
      <ul>
        <ul>
          {this.props.array.map((entry, index) => (
            <li key={index++}><Link to={`journal/${index++}`}>{entry[0]}</Link> - <cite>test</cite></li>
            ))}
        </ul>
      </ul>
      </div>
      );
  }
}

export default JournalMenu;