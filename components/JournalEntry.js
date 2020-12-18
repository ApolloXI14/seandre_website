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
          JOURNAL ENTRY
          
		    </div>
      );
   }
}
export default JournalEntry;
