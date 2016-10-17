import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FriendRowContent from './friendrowcontent.jsx';
var FriendContent = React.createClass({
	getInitialState : function () {
		return(
			{ rows : [] }
		);
	},
	handledelete:function(urldel){
		this.props.deletefunc("DELETE",urldel);
	},
	handleUpdation : function (newrow,id) {
		this.props.updateFunc(newrow,id);
		this.setState({rows : newrow});
	},
	render	: function() {
		var rows = [];
			this.props.friends.forEach(function(friends) {
				rows.push(<FriendRowContent deldata={this.handledelete} friends={friends} key={friends.id} onRowSubmit ={this.handleUpdation}  />);

			}.bind(this));
			// rows.push(<FriendRowContent url={this.props.url} />);
		return(
			<center>
			<Table className = "table-bordered">
				<TableHeader>
					<TableRow>
						<TableHeaderColumn style = {{padding:"5px" ,textAlign:"center"}}>ID.No</TableHeaderColumn>
						<TableHeaderColumn style = {{padding:"5px" ,textAlign:"center"}}>Name</TableHeaderColumn>
						<TableHeaderColumn style = {{padding:"5px" ,textAlign:"center"}}>Gender</TableHeaderColumn>
						<TableHeaderColumn style = {{padding:"5px" ,textAlign:"center"}}>Email</TableHeaderColumn>
						<TableHeaderColumn style = {{padding:"5px" ,textAlign:"center"}}>Company</TableHeaderColumn>
						<TableHeaderColumn style = {{padding:"5px" ,textAlign:"center"}}>phone</TableHeaderColumn>
						<TableHeaderColumn style = {{padding:"5px" ,textAlign:"center"}}>Action</TableHeaderColumn>
					</TableRow>
					</TableHeader>
				<TableBody>{rows}</TableBody>	
			</Table>

			</center>
			
		);
	}
});
export default FriendContent;