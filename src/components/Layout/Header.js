import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactTshirts</h1>
        <HeaderCartButton onShow={props.onOpen} />
      </header>
    </Fragment>
  );
};

export default Header;