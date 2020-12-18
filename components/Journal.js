// TODO: Make component dynamic in future, to loop through a cache of text entries and render
// PLAN: Similar to "Slideshow" comp, folder of plaintext files CONTAINING CONTENT AND LIGHT HTML is read
// FILENAME WILL CONTAIN METADATA FOR POST (TITLE, DATE, ETC.), AND BE PARSED TO SUPPLY THAT
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import JournalEntry from './JournalEntry';
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
        this.renderBody();
      });
    }
    renderBody(props) {
      ReactDOM.render(
        <Router>
        <ul>
          {this.state.journalEntriesArray.map((entry, index) => (
            <li key={index}><Link to="/home">{entry[0]}</Link></li>
            ))}
        </ul>
        <Switch>
          <Route exact path="/entry/:id" component={JournalEntry} />
        </Switch>
        </Router>, document.getElementById('body'));
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
