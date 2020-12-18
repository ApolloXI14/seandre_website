// TODO: Make component dynamic in future, to loop through a cache of text entries and render
// PLAN: Similar to "Slideshow" comp, folder of plaintext files CONTAINING CONTENT AND LIGHT HTML is read
// FILENAME WILL CONTAIN METADATA FOR POST (TITLE, DATE, ETC.), AND BE PARSED TO SUPPLY THAT
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import JournalMenu from './JournalMenu';
import JournalEntry from './JournalEntry';


import ReactDOM from 'react-dom';

class Journal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentEntry: null,
      journalEntriesArray: []
    };
  }

  componentDidMount(props) {
      function importAll(req) {
        let txtfiles = []; // 2D array
        req.keys().map((fileName, index) => {
          txtfiles.push( [fileName, req(fileName) ] ); });
          return txtfiles;
      }

    const req = require.context(JOURNAL_DIR, true, /.txt$/);
    this.setState((state, props) => ({
        journalEntriesArray: importAll(req)
      }), () => {
        console.log('journalEntriesArray: ', this.state.journalEntriesArray);
        // this.renderBody();
      });
    }
    componentDidUpdate(prevProps) {
      console.log('update: ', prevProps);
      if (prevProps.match.params !== this.props.match.params) {
            const currentEntry = Number(this.props.match.params.id);
            this.setState((state, props) => ({
              currentEntry: currentEntry
            }), () => {
              console.log('STATE UPDATE: ', this);
            });
      }
      // if (this.props.match) {
      //     this.setState((state, props) => ({
      //       currentEntry: this.props.params.id
      //     }), () => {
      //       console.log('update: ', this);
      //     });
      // }
    }

   render(){
      return (
        <div id="journalContainer">
          
              <JournalMenu array={this.state.journalEntriesArray} />
              
            
        </div>
      );
   }
}
export default Journal;
