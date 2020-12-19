import React, { Component } from 'react';
import parse from 'html-react-parser';
import { withRouter, Link } from 'react-router-dom';
// "withRouter" must be imported AND USED TO EXPORT COMP for route access

class JournalEntry extends Component{
	constructor(props) {
		super(props);
		this.state = {
			html: null,
			lastEntryId: this.props.lastEntryId
		};
	}
	componentDidMount(props) {
		const html = parse(this.props.entryContent);
		this.setState({
			html: html
		});
	}
   render(){
   		let location = this.props.location.pathname.split('/');
   		let val = location[location.length-1];
   		let currentParamId = !isNaN(val) && Number(val);
      return(
      	<div>
	         <div>
	      		{this.state.html}
		    </div>
		    <div>
		    	<Link to="/journal">Back</Link>
		    	{(currentParamId !== 1) &&
		    		<Link to={`/journal/${currentParamId - 1}`}>Prev</Link>
		    	 }
		    	{(currentParamId !== this.state.lastEntryId) &&
		    		<Link to={`/journal/${currentParamId + 1}`}>Next</Link>
		    	 }
		    </div>
	    </div>
      );
   }
}
export default withRouter(JournalEntry);