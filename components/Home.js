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
	        let fileDate = strArr[0];
	        fileDate = fileDate.replace('./', '');
	        fileDate =  fileDate.slice(2,4) + '/' + fileDate.slice(4,6) + '/' + fileDate.slice(0,2);
	        let fileName = strArr[1];
	        fileName = fileName.replace('.txt', '');

	        
	        fileName = fileName.replace(/_/g, ' ');
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
	        homeEntriesArray: importAll(req).reverse() // txt files are titled by date (e.g. "20201231..."), and this makes it reverse chronological
	      }));
	}
   render(){
      return(
         <div id="homeDiv">
          	{this.state.homeEntriesArray.length && this.state.homeEntriesArray.map((entry, index) => (
          		<div key={index}>
          		<div className="entryData-flex">
          			<div className="entryName">{entry[0][0]}</div><div className="entryDate">Dated: {entry[0][1]}</div>
          		</div>
            	<div className="entryContent">{entry[1]}</div>
            	<hr/>
            	</div>
            ))}
		</div>
      );
   }
}
export default Home;
