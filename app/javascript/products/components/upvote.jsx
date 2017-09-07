import React, { Component } from 'react';

export default class Upvote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
  }

  render() {
    const upvotedClass = this.state.product.up_voted ? 'product-upvote-upvoted' : '';
    const classes = `product-upvote ${upvotedClass}`;

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="product-arrow"></div>
        <div className="product-count">
          {this.state.product.up_votes}
        </div>
      </div>
    );
  }

  handleClick = () => { // Preserve this
    Rails.ajax({
      url: `/products/${this.props.product.id}/upvote`,
      type: 'POST',
      success: (data) => {
        this.setState({ product: data })
      }
    });
  }
}





