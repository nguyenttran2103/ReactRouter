import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    console.log(this.props.match);
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: '2500'
      },
      {
        id: 2,
        name: 'Product 2',
        price: '1500'
      },
      {
        id: 3,
        name: 'Product 3',
        price: '200'
      }
    ];

    const productListElement = products.map((product) => {
      return (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} match={this.props.match} />
      );
    });

    return (

      <div className="row">
        {productListElement}
      </div>

    );
  }
}

export default ProductList;
