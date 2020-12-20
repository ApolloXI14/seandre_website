import React, { Component } from 'react';
import parse from 'html-react-parser';
import { withRouter, Link } from 'react-router-dom';
import styles from '../less/JournalEntry.less'
// "withRouter" must be imported AND USED TO EXPORT COMP for route access

class JournalEntry extends Component{
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
		let html = this.props.entriesArray[index-1][1]; // minus shifting for array index
		return html = parse(html);
	}
	componentDidMount(props) {
		const currentParamId = this.getParamId();
		const html = this.getHTML(currentParamId);
		this.setState((state, props) => ({
			html: html,
			currentEntryId: currentParamId
		}), () => {
			this.myRef.current.scrollIntoView(); // ensure scroll to top occurs
		});
	}
	componentDidUpdate(prevProps) {
		if (prevProps.match.params !== this.props.match.params) {
			const currentParamId = this.getParamId();
			const html = currentParamId ? this.getHTML(currentParamId) : null;
			this.setState((state, props) => ({
				html: html,
				currentEntryId: currentParamId
			}), () => {
				this.myRef.current.scrollIntoView(); // ensure scroll to top occurs
			});
		}
	}
   render(){
      return(

      	<div ref={this.myRef} id="journalEntryContainer">
	      	<div id="journalEntryDiv-flex">
	      		<div className="previous">
	      			{(this.state.currentEntryId !== 1) ?
			    		<Link style={{textDecoration: "none"}} to={`/journal/${this.state.currentEntryId - 1}`}>&#10094;</Link> :
			    		<div><Link style={{textDecoration: "none"}} to="/journal">&#10094;</Link><p className="btnTxt">(Back)</p></div>
			    	 }
	      		</div>
		         <div id="htmlDiv">
		      		{this.state.html}
			    </div>
			    <div className="nextBtn">
			    	{(this.state.currentEntryId !== this.state.lastEntryId) ?
			    		<Link style={{textDecoration: "none"}} to={`/journal/${this.state.currentEntryId + 1}`}>&#10095;</Link> :
			    		<div><Link style={{textDecoration: "none"}} to="/journal">&#10095;</Link><p className="btnTxt">(End)</p></div>
			    	 }
			    </div>
		    </div>
	    </div>

      );
   }
}
export default withRouter(JournalEntry);