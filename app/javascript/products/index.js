import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/product_list';

const productsContainer = document.getElementById('products');
if (productsContainer) {
  const products = JSON.parse(productsContainer.dataset.products);
  ReactDOM.render(
    <ProductList products={products} />
    , productsContainer);
}
