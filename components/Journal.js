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
      function getFileMetaData(str) {  // TODO: Export to own utility later, to de-duplicate
        let strArr = str.split('__');
        let fileDate = strArr[1].slice(0,2) + '/' + strArr[1].slice(2,4) + '/' + strArr[1].slice(4,6);
        fileDate = fileDate.replace('.txt', '');
        let fileName = strArr[0];
        fileName = fileName.replace('./', '');
        fileName = fileName.replace(/_/g, ' ');
        return [fileName, fileDate];
      }
      function importAll(req) {
        let txtfiles = []; // 2D array in [['', ...], ''] form, to get array of metadata (parsed from fileName) and file content
        req.keys().map((fileName, index) => {
          txtfiles.push( [getFileMetaData(fileName), req(fileName) ] ); });
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
