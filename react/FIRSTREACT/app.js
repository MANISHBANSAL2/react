var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  getInitialState:function(){
    return {name: '', price: ''};
  },
  handleNamechange:function(e){
    this.setState({name:e.nametarget.value});
  },
  handlePricechange:function(e){
    this.setState({price:e.pricetarget.value});
  },
  render: function() {
    return (
      <form className="searchbar">
        <input type="text" placeholder="Search" onChange={this.handleNamechange}/>
        <input type="button" value="submit" onChange={this.handlePricechange}/>
        <p>
          <input type="checkbox"/>
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.state.data} />
      </div>
    );
  }
});


// var PRODUCTS = [
//   {category: 'Clothes', price: '$49.99', stocked: true, name: 'Lee'},
//   {category: 'Clothes', price: '$9.99', stocked: true, name: 'Global Desi'},
//   {category: 'Clothes', price: '$29.99', stocked: false, name: 'Park Avenue'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'LED'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 7'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
 
ReactDOM.render(
  <FilterableProductTable url="http://localhost:8080/PRODUCTS" />,
  document.getElementById('content')
);