import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
var FriendRowContent = React.createClass({
		getInitialState : function() {
		return(
			{text : ""});
	},
	deleteFunction:function(value){
		var urldel="/friends/"+value;
        console.log("id = "+value);
        this.props.deldata(urldel);
        },
    handleUpdate : function() {
	this.setState({text:"clicked"});
	},
	handleSave : function() {
		// var id = this.refs.id.value;
        var name = this.refs.name.value;
        var gender = this.refs.gender.value;
        var email = this.refs.email.value;
        var company = this.refs.company.value;
        var phone = this.refs.phone.value;
        var id = this.props.friends.id;
        var newrow = {name: name,gender: gender,email: email,company: company,phone: phone };
        this.props.onRowSubmit( newrow ,id );
        console.log(id);

        this.setState({text:"changed"});

	},
	render: function() {
		var id=this.props.friends.id;
		// var val = this.deleteFunction(id);
		console.log(id);
	    if(this.state.text == "clicked"){
			return(
				<TableRow>
					<TableRowColumn style = {{padding:"5px" ,textAlign:"center"}}><input type = "text" style = {{height:"30px"}} ref = "name" defaultValue = {this.props.friends.name}/></TableRowColumn>
					<TableRowColumn style = {{padding:"5px" ,textAlign:"center"}}><input type = "text" style = {{height:"30px"}} ref = "gender" defaultValue = {this.props.friends.gender}/></TableRowColumn>
					<TableRowColumn style = {{padding:"5px" ,textAlign:"center"}}><input type = "email" style = {{height:"30px"}} ref = "email" defaultValue = {this.props.friends.email}/></TableRowColumn>
					<TableRowColumn style = {{padding:"5px" ,textAlign:"center"}}><input type = "text" style = {{height:"30px"}} ref = "company" defaultValue = {this.props.friends.company}/></TableRowColumn>
					<TableRowColumn style = {{padding:"5px" ,textAlign:"center"}}><input type = "email" style = {{height:"30px"}} ref = "phone" defaultValue = {this.props.friends.phone}/></TableRowColumn>
					<TableRowColumn style = {{padding:"5px" ,textAlign:"center"}}><input type = "button" className = "btn btn-success" id = "{{this.props.friends.id}}" value = "Save" onClick = {this.handleSave} /></TableRowColumn> 
					<TableRowColumn style = {{padding:"5px" ,textAlign:"center"}}><input type = "button" className = "btn btn-warning" id = "{{this.props.friends.id}}" value = "Cancel" onClick = {this.handleCancel} /></TableRowColumn> 
				</TableRow>

			);
		}
		else{
			var edit = this.props.friends.id;
			console.log(edit);
		return(
			<TableRow data-id="{{this.props.friends.id}}">
				<TableRowColumn>{this.props.friends.id}</TableRowColumn>
				<TableRowColumn>{this.props.friends.name}</TableRowColumn>
				<TableRowColumn>{this.props.friends.gender}</TableRowColumn>
				<TableRowColumn>{this.props.friends.email}</TableRowColumn>
				<TableRowColumn>{this.props.friends.company}</TableRowColumn>
				<TableRowColumn>{this.props.friends.phone}</TableRowColumn>
				<TableRowColumn><input type="button" className="btn btn-success" id="{{this.props.friends.id}}" value="Update" onClick={this.handleUpdate}/>
				<input type="button" className="btn btn-danger" id="{{this.props.friends.id}}" value="Delete" onClick={this.deleteFunction.bind(this, id)}/>
				</TableRowColumn>
			</TableRow>

			);
		}
	}
});
export default FriendRowContent;