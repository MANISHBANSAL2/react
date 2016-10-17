var mainform=react.createclass({
	getInitialState: function() {
    return {data: []};
  },
  componentDidMount:function(){
  	$.ajax({
  		url:this.props.url,
  		Datatype:'json',
  		cache:false,
  		suceess:function(data){
  		this.setstate({data:data});
  	}.bind(this)
  	error:function(xhr,status,err){
  	console.error(this.props.url, status, err.toString());
  }.bind(this)
  	});
  }
  render:function(){
  	return
  }
})