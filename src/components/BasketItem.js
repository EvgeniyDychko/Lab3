import React from 'react';

class BasketItem extends React.Component {
  render() {
    return (
      <div className="basket-item">
        <div className="basket-item-photo">{this.props.priceUAH}</div>
        {/*http://apeps.kiev.ua/images/phones/ID.jpg*/}
        <div className="basket-item-name">{this.props.productName}</div>
        <div className="basket-item-count">{this.props.count}</div>
        <div className="basket-item-price">{this.props.priceUAH}</div>
        <div
          className="basket-item-add"
          onClick={this.props.addItem()}>+</div>
        <div
          onClick={this.props.reduceItem()}
          className="basket-item-reduce">-</div>
      </div>
    )
  }
}

export default BasketItem;