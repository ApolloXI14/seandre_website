import React, { Component } from 'react';

class JournalEntry extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(props) {
		console.log('JournalEntry: ', this);
	}
   render(){
      return(
         <div>
      		{this.props.entryContent}
	    </div>
      );
   }
}
export default JournalEntry;
