// <Link> React components are not handled by "html-react-parser"; consider enhancement?
import parse from 'html-react-parser';
import React, { Component } from 'react';

export function ImportData(WrappedComponent, dataArray) {
	return class importData extends Component {

		constructor(props) {
			super(props);
			this.state = {
				req: this.props.req,
				dataArray: []
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
	      this.setState((state, props) => ({
	      	dataArray: importAll(this.props.req).reverse()
	      }));
		}
		componentDidUpdate(prevProps) {
			if (prevProps && prevProps.dataArray && (prevProps.dataArray !== this.props.dataArray)) {
				this.setState(() =>  ({
					dataArray: this.state.dataArray
				}));
			}
		}

		render () {
			const {extraProp, ...passThroughProps } = this.props;
			const dataArray = this.state.dataArray;
			return <WrappedComponent dataArray={this.state.dataArray} {...this.state} />;
		}


	}
}