import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styles from '../less/JournalEntry.less'
// "withRouter" must be imported AND USED TO EXPORT COMP for route access

class JournalEntry extends React.PureComponent{
	constructor(props) {
               super(props);
               this.myRef = React.createRef();
               this.state = {
                       html: null,
                       entriesArray: this.props.entriesArray,
                       currentEntryId: null,
                       lastEntryId: this.props.lastEntryId
               };
       }
	getParamId(props) {
		let location = this.props.location.pathname.split('/');
   		let val = location[location.length-1];
   		let currentParamId = !isNaN(val) && Number(val);
   		return currentParamId
	}
	getHTML(index) {
		let html = this.props.dataArray.length && this.props.dataArray[index-1][1]; // minus shifting for array index
		return (html);
	}
   render(){
   		const currentEntryId = this.getParamId();
   		const lastEntryId = this.props.dataArray.length;
   		const html = this.getHTML(currentEntryId);
      return(
      	<div ref={this.myRef} id="journalEntryContainer">
	      	<div id="journalEntryDiv-flex">
	      		<div className="previous">
	      			{(currentEntryId !== 1) ?
			    		<Link style={{textDecoration: "none"}} to={`/journal/${currentEntryId - 1}`}>&#10094;</Link> :
			    		<div><Link style={{textDecoration: "none"}} to="/journal">&#10094; <br/><p className="btnTxt">(Back)</p></Link></div>
			    	 }
	      		</div>
		         <div id="htmlDiv">
		      		{html}
			    </div>
			    <div className="nextBtn">
			    	{(currentEntryId !== lastEntryId) ?
			    		<Link style={{textDecoration: "none"}} to={`/journal/${currentEntryId + 1}`}>&#10095;</Link> :
			    		<div><Link style={{textDecoration: "none"}} to="/journal">&#10095; <br/><p className="btnTxt">(End)</p></Link></div>
			    	 }
			    </div>
		    </div>
	    </div>

      );
   }
}
export default withRouter(JournalEntry);