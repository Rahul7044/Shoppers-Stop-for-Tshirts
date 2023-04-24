import React, { useContext } from "react";
import CartContext from "../../../Store/CartContext";
import classes from "./Tshirt.module.css";
import TshirtForm from "./TshirtForm";

const Tshirt = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;

  const addToCart = (amount) => {
    cartCtx.addTshirt({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.Tshirt}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TshirtForm id={props.id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default Tshirt;