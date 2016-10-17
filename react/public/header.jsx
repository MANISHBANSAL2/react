import React from 'react';
import AppBar from 'material-ui/AppBar';
export default class HeadClass extends React.Component{
	render() {
		return (
			 <AppBar
    title="Friends Data"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
		);
	}
}

// // export default HeadClass;
// // var React = require('react');
// var HeadClass=React.createClass({
// 	render : function() {
// 		return (
// 			<div>
// 				<center><h1>Friends Data</h1></center>
// 			</div>
// 		);
// 	}
// });

// export default HeadClass;