import React from "react";

const CartContext = React.createContext({
  Tshirts: [],
  totalAmount: 0,
  addTshirt: (Tshirt) => {},
  removeTshirt: (id) => {},
  getItem: (Tshirt) => {},
});

export default CartContext;