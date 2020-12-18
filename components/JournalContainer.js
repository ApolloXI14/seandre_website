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
      currentEntryId: null,
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
            const currentEntryId = this.props.match.params.id ? Number(this.props.match.params.id) -1 : null; // minusShifting for array
            this.setState((state, props) => ({
              currentEntryId: currentEntryId
            }), () => {
              console.log('STATE UPDATE: ', this);
              let content = this.determineContent(this.state.currentEntryId, this.state.journalEntriesArray);
              console.log('NEW CONTENT: ', content);
            });
      }
    }
    determineContent(currentEntryId, journalEntriesArray) {
      let content;
      if (currentEntryId !== null) {
        const entryContent = journalEntriesArray[currentEntryId][1];
        content = <JournalEntry entryContent={entryContent} />
      } else {
        content = <JournalMenu array={journalEntriesArray} />
      }
      return content;
    }
   render(){
      const currentEntryId = this.state.currentEntryId;
      let content;
      if (currentEntryId) {
        const entryContent = this.state.journalEntriesArray[this.state.currentEntryId][1];
        content = <JournalEntry entryContent={entryContent} />
      } else {
        content = <JournalMenu array={this.state.journalEntriesArray} />
      }
      return (
        <div id="journalContainer">
          <div id="journalDiv">
            {this.state.currentEntryId === null ? 
              <JournalMenu array={this.state.journalEntriesArray} /> :
              <JournalEntry entryContent={this.state.journalEntriesArray[this.state.currentEntryId][1]} />}
          </div>
        </div>
      );
   }
}
export default Journal;
