import React, { Component } from 'react';
import Upvote from './upvote';

export default class ProductListItem extends Component {
  render() {
    return (
      <div className="product">
        <Upvote product={this.props.product} />
        <div className="product-body">
          <h3>
            <a href={this.props.product.url} target="_blank">{this.props.product.name}</a>
          </h3>
          <p><strong>Tagline</strong> {this.props.product.tagline}</p>
        </div>
        <div className="product-controls">
          <img src={this.props.product.user.avatar_url} className="avatar" />
        </div>
      </div>
    );
  }
}
