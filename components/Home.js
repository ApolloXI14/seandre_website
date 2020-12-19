// <Link> React components are not handled by "html-react-parser"; consider enhancement?
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../less/Home.less'
import parse from 'html-react-parser';

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			homeEntriesArray: []
		};
	}
	componentDidMount(props) {
		function getFileMetaData(str) { // TODO: Export to own utility later, to de-duplicate
	        let strArr = str.split('__');
	        let fileDate = strArr[1].slice(0,2) + '/' + strArr[1].slice(2,4) + '/' + strArr[1].slice(4,6);
	        fileDate = fileDate.replace('.txt', '');
	        let fileName = strArr[0];
	        fileName = fileName.replace('./', '');
	        return [fileName, fileDate];
	      }
	      function importAll(req) {
	        let txtfiles = []; // 2D array in [['', ...], ''] form, to get array of metadata (parsed from fileName) and file content
	        req.keys().map((fileName, index) => {
	          txtfiles.push( [getFileMetaData(fileName), parse(req(fileName)) ] ); });
	          return txtfiles;
	      }
	      const req = require.context(HOME_DIR, true, /.txt$/);
	      this.setState((state, props) => ({
	        homeEntriesArray: importAll(req)
	      }));
	}
   render(){
      return(
         <div id="homeDiv">
          	{this.state.homeEntriesArray.length && this.state.homeEntriesArray.map((entry, index) => (
            	<div key={index}>{entry[1][index]}</div>
            ))}
		</div>
      );
   }
}
export default Home;
