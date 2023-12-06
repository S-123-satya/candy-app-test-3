import React from 'react'

const CartProvider = (props) => {
  return (
    <CartContext.Provider
      value={{
        items: [],
        price: 0,
        additem: (item) => {},
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider