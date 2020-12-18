import React, { Component } from 'react';
import parse from 'html-react-parser';

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
      		{this.state.html}
	    </div>
      );
   }
}
export default JournalEntry;
