import React, { Component } from 'react';
import styles from '../less/Home.less';
import { ImportData } from './ImportData';
import ReactDOM from 'react-dom';

class Home extends Component{
	constructor(props) { 
		super(props);
		this.state = {
			req: require.context(HOME_DIR, true, /.txt$/)
		};
	}
	componentDidMount(props) { 
	      const NewComp = (props) => {
	      	return (
	      		typeof(props.dataArray) === 'object' && props.dataArray.length && props.dataArray.map((entry, index) => (
                      <div key={index}>
                      <div className="entryData-flex">
                              <div className="entryName">{entry[0][0]}</div><div className="entryDate">Dated: {entry[0][1]}</div>
                      </div>
              <div className="entryContent">{entry[1]}</div>
              <hr/>
               </div>
            ))
	      	)
	      };
	      const HomeWithData = ImportData(NewComp, this.state.req);
	      this.setState((state, props) => ({ 
	        comp: HomeWithData
	      }), () => {
	      	ReactDOM.render(
	      		<HomeWithData req={this.state.req} />, document.getElementById('homeDiv')
	      		)
	      });
	}
   render(){
      return(
         <div id="homeDiv">
          	
		</div>
      );
   }
}
export default Home;
