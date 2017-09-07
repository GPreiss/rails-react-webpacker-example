import React, { Component } from 'react';
import ProductListItem from './product_list_item';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((product) => {
          return <ProductListItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}
