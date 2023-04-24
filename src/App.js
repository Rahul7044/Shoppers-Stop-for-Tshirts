import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import CartProvider from "./Store/CartProvider";
import Tshirts from "./components/TShirts/Tshirts";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const onOpenCart = () => {
    setCartShow(true);
  };

  const onCloseCart = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={onCloseCart} />}
      <Header onOpen={onOpenCart} />
      <main>
        <Tshirts />
      </main>
    </CartProvider>
  );
}

export default App;
