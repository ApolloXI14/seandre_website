import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import JournalMenu from '../components/JournalMenu';
import JournalEntry from '../components/JournalEntry';
import ReactDOM from 'react-dom';
import { ImportData } from '../components/ImportData';

class Journal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      req: require.context(process.env.JOURNAL_DIR, true, /.txt$/),
      currentEntryId: null,
      dataArray: []
    };
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
      const JournalMenuWithData = ImportData(JournalMenu, this.state.req);
      const JournalEntryWithData = ImportData(JournalEntry, this.state.req);
      return (
        <div id="journalContainer">
              {this.state.currentEntryId === null ? 
              <JournalMenuWithData req={this.state.req} array={this.state.dataArray} /> :
              <JournalEntryWithData req={this.state.req} dataArray={this.state.dataArray} lastEntryId={this.state.dataArray.length} />}
        </div>
      );
   }
}
export default Journal;
