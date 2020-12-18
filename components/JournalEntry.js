import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class JournalEntry extends Component{
	constructor(props) {
		super(props);
		this.state = {
			html: null
		};
	}
	componentDidMount(props) {
		const html = parse(this.props.entryContent);
		this.setState({
			html: html
		});
	}
   render(){
      return(
      	<div>
	         <div>
	      		{this.state.html}
		    </div>
		    <div>
		    	<Link to="/journal">Back</Link>
		    </div>
	    </div>
      );
   }
}
export default JournalEntry;
