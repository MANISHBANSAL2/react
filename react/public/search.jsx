import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
var SearchBar = React.createClass({
	getInitialState: function() {
		return{ inputValue:"", data: [] };
		},

	handleOnClick: function(e) {
			this.setState({inputValue:e.target.value});
		},
	handleSubmit: function() {
		var ur=this.props.url;
		var	url=ur+'?_limit=20&name='+this.state.inputValue;
			this.props.onUserInput('GET',url);
		},
	handleLoad: function() {
		this.props.urldata('GET',this.props.url+'?_limit=20');
		},
	render: function() {	
		return(
			<div>
			<center>
				<input type = "text"
					   placeholder = "Enter"
					   value = {this.state.inputValue}
					   onChange = {this.handleOnClick}
				/>
				<RaisedButton label="Submit" primary={true} onClick={this.handleSubmit} />
		 		<RaisedButton label="Load" primary={true} onClick={this.handleLoad} />
		 		</center>
			</div>
		);
	}
});
export default SearchBar;


// <input type = "submit"
// 						className = "btn btn-success"
// 		 				value = "submit"
// 		 				onClick = {this.handleSubmit}
		 		// />