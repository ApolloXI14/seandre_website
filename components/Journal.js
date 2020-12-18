// TODO: Make component dynamic in future, to loop through a cache of text entries and render
// PLAN: Similar to "Slideshow" comp, folder of plaintext files CONTAINING CONTENT AND LIGHT HTML is read
// FILENAME WILL CONTAIN METADATA FOR POST (TITLE, DATE, ETC.), AND BE PARSED TO SUPPLY THAT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Journal extends Component{
  constructor(props) {
    super(props);
    this.state = {
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
        // const EntryLinks = this.createJournalLinksArray()
        // const JournalMenu = (EntryLinks) => {
        //   return(
        //     <ul>
        //     {EntryLinks}
        //   </ul>
        //   );
        // };
        this.renderBody();
      });
    }
    renderBody(props) {
      ReactDOM.render(
        <ul>
          {this.state.journalEntriesArray.map((entry, index) => (
            <li key={index}><Link to="/">{entry[0]}</Link></li>
            ))}
        </ul>, document.getElementById('body'));
    }

   render(){
      return (
        <div id="body">
          JOURNAL COMPONENT
        </div>
      );
   }
}
export default Journal;
