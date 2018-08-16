import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {    
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"><Link to={`/productDetail/${this.props.id}`}>{this.props.name}</Link></h3>
        </div>
        <div className="panel-body">
          {this.props.price}
        </div>
      </div>
    );
  }
}

export default Product;