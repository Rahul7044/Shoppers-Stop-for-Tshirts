import React, { useRef } from "react";
import classes from "./AddTshirt.module.css";

const AddTshirt = (props) => {
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descRef.current.value;
    const price = priceRef.current.value;

    const obj = {
      id: Math.random(),
      name: name,
      description: description,
      price: price,
    };
    props.onAddTshirt(obj);
  };
  return (
    <section className={classes.summary}>
      <form onSubmit={submitHandler}>
        <label>Tshirt Name</label>
        <input type="text" ref={nameRef} required></input>
        <label>Description</label>
        <input type="text" ref={descRef} required></input>
        <label>Price</label>
        <input type="number" ref={priceRef} required></input>
        <button> Add Tshirt </button>
      </form>
    </section>
  );
};

export default AddTshirt;