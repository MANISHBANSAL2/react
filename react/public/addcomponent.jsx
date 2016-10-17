import React from 'react';
import AddRow from './addrow.jsx';
var AddComponent = React.createClass({
	getInitialState: function() {
		return ({
			add:false
		});
	}, 
	handleADD : function() {
		if(this.state.add==true)
		{
			this.setState({add:false});
		}
		else{
		this.setState({add:true});
		}
	},
	handleRow : function(addrow) {
		var urladd="/friends/?_limit=10";
	 	this.props.insert(urladd,addrow);
	},
	render : function() {
		if(this.state.add==false){
			return(
				<div className="container" style = {{paddingTop : "20px"}}>
					<input type = "button" 
				 		className = "btn btn-primary" 
				 		defaultValue = "Add Friends" 
				 		style ={{textAlign:"center" ,marginRight:"40px"}}
				 		onClick = {this.handleADD}
		 			/> 	
		 		</div>
		 	);
		}
		else{
			return(	
		 	   	<AddRow rowSubmit={this.handleRow} rowCancel={this.handleADD}/>	
			);
		}
	}
});
export default AddComponent;