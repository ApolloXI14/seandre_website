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
      function sanitizeFileName(str) {
        str = str.replace('./', '');
        str = str.replace('_', ' ');
        str = str.replace('.txt', '');
        return str;
      }
      function importAll(req) {
        let txtfiles = []; // 2D array
        req.keys().map((fileName, index) => {
          txtfiles.push( [sanitizeFileName(fileName), req(fileName) ] ); });
          return txtfiles;
      }
      const req = require.context(JOURNAL_DIR, true, /.txt$/);
      this.setState((state, props) => ({
        journalEntriesArray: importAll(req)
      }));
    }
    componentDidUpdate(prevProps) {
      if (prevProps.match.params !== this.props.match.params) {
            const currentEntryId = this.props.match.params.id ? Number(this.props.match.params.id) -1 : null; // minusShifting for array
            this.setState((state, props) => ({
              currentEntryId: currentEntryId
            }));
      }
    }
   render(){
      return (
        <div id="journalContainer">
            {this.state.currentEntryId === null ? 
              <JournalMenu array={this.state.journalEntriesArray} /> :
              <JournalEntry entriesArray={this.state.journalEntriesArray} lastEntryId={this.state.journalEntriesArray.length} />}
        </div>
      );
   }
}
export default Journal;
