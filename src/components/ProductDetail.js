import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div>This is Product with id: {this.props.match.params.id}</div>
    );
  }
}

export default ProductDetail;