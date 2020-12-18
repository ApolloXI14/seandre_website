import React, { Component } from 'react';

class JournalEntry extends Component{
	componentDidMount(props) {
		console.log('JournalEntry');
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
