import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartTshirt from "./CartTshirt";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount}`;
  const ifTshirt = cartCtx.Tshirts.length > 0;

  const CartTshirtRemove = (id) => {
    cartCtx.removeTshirt(id);
  };

  const CartTshirtAdd = (Tshirt) => {           
    console.log(Tshirt);
    cartCtx.addTshirt({ ...Tshirt, amount: 1 });
  };
  const addProduct = () =>{
    alert('Successfully Orederd')
    props.onClose()
  }

  const Tshirts = (
    <ul className={classes["cart-Tshirts"]}>
      {cartCtx.Tshirts.map((Tshirt) => (
        <CartTshirt
          key={Tshirt.id}
          name={Tshirt.name}
          amount={Tshirt.amount}
          price={Tshirt.price}
          onRemove={CartTshirtRemove.bind(null, Tshirt.id)}
          onAdd={CartTshirtAdd.bind(null, Tshirt)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {Tshirts}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {ifTshirt && <button  onClick={addProduct} className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;