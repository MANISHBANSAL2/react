import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HeadClass from './header.jsx';
import SearchBar from './search.jsx';
import AddComponent from './addcomponent.jsx';
import FriendContent from './delete.jsx';
var MainRow = React.createClass({
	getInitialState() {
		return{
			inputValue:'',
			data:[]
			}
 	},
	handleAjax(type,url) {
		console.log(" ajax request is : ",type);
		$.ajax({
			type: type,
			url: url,
			// url:this.props.url+'?_limit=5&name='+inputValue,
			dataType:"json",
			success:function(data){
				this.setState({data:data});
			}.bind(this)

		});
	},
	handlePatch : function(newrow,id) {
		var index;
		$.ajax({
			type : "PATCH",
			url : this.props.url+"/"+id,
			dataType : "json",
			data : newrow,
			success : function(data){
				this.state.data.forEach(function(n,i){
					if(id==n.id){
						index=i;
					}
				});
				// this.state.data[index].id = newrow.id;
				this.state.data[index].name = newrow.name;
				this.state.data[index].gender = newrow.gender;
				this.state.data[index].email = newrow.email;
				this.state.data[index].company = newrow.company;
				this.state.data[index].phone = newrow.phone;
				this.setState({data:this.state.data});
				// alert("success");
				console.log("inside Ajax");
				console.log(data);
			}.bind(this) 
		});
	},
	handleAddAjax : function(url,adddata) {
		var m=this;
		$.ajax({
			type : "post",
			url : url,
			dataType : "json",
			data : adddata,
			success : function(data){
				alert("friends added succesfully");
				m.handleAjax("GET","/friends?_limit=10");
			}
		});
	},
	render: function() {
		return(
			<MuiThemeProvider>
				<div>
					<HeadClass />
					<SearchBar onUserInput={this.handleAjax} urldata={this.handleAjax} url={this.props.url}/>
					<AddComponent insert={this.handleAddAjax}/>
					<FriendContent deletefunc={this.handleAjax} updateFunc={this.handlePatch} friends={this.state.data} url={this.props.url} />
				</div>
			</MuiThemeProvider>
		);
	}
});
ReactDOM.render(
  <MainRow url="/friends"/>,
  document.getElementById('content')
);
