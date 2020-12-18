import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JournalMenu extends Component{
   render(){
    return (
      <ul>
        <ul>
          {this.props.array.map((entry, index) => (
            <li key={index}><Link to={`journal/${index}`}>{entry[0]}</Link></li>
            ))}
        </ul>
      </ul>
      );
  }
}

export default JournalMenu;