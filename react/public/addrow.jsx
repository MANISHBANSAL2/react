import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
var AddRow = React.createClass({
	handleOnSubmit : function() {
		// var id = this.refs.id.value;
		var firstname = this.refs.firstname.getValue();
		var lastname = this.refs.lastname.getValue();
		var name = firstname.concat("").concat(lastname);
		var gender = this.refs.gender.getValue();
        var email = this.refs.email.getValue();
        var company = this.refs.company.getValue();
        var phone = this.refs.phone.getValue();
        var addrow = {name: name,gender: gender ,email: email,company: company,phone: phone};
        this.props.rowSubmit( addrow );
        this.props.rowCancel();
	},
	render: function() {
		return(
				<div className="container" style = {{paddingTop : "20px"}}>
					<h1>Add Details</h1>
					<div >
			            First Name:<TextField hintText="First Name" floatingLabelText="First Name" style={{margin:"5px", width:"150px"}} ref="firstname"/>
                        Last Name:<TextField hintText="Last Name" floatingLabelText="Last Name" style={{margin:"5px", width:"150px"}} ref="lastname"/>
                        Gender:<TextField hintText="Male/Female" floatingLabelText="Male/Female" style={{margin:"5px" , width:"150px"}} ref="gender"/>
                        Email:<TextField hintText="Customer Email" floatingLabelText="Customer Email" style={{margin:"5px", width:"150px"}} ref="email"/>
                        Company:<TextField hintText="Enter Company" floatingLabelText="company" style={{margin:"5px", width:"150px"}} ref="company"/>
                        Phone:<TextField hintText="Customer Phone" floatingLabelText="Customer Phone" style={{margin:"5px", width:"150px"}} ref="phone"/>
						<RaisedButton label = "Add Friends" primary={true} style={{margin:"0 5px 0 0"}} onClick={this.handleOnSubmit}/> 
                        <RaisedButton label = "Cancel" secondary={true} onClick={this.props.rowCancel}/>
		            </div>
		        </div>
		    );
	}
});
export default AddRow;