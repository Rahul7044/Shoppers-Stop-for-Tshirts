import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartTshirts = cartCtx.Tshirts.reduce((curNum, Tshirt) => {
    return curNum + Tshirt.amount;
  }, 0);

  return (
    <button onClick={props.onShow} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartTshirts}</span>
    </button>
  );
};

export default HeaderCartButton;