import React from 'react';

import BasketItem from './BasketItem';

class Basket extends React.Component {
  render() {
    return (
      <div className="basket">
        {this.props.purchases.map(item =>
          <BasketItem
            purchase={item}
            key={item.id} />
        )}
      </div>
    )
  }
}

export default Basket;