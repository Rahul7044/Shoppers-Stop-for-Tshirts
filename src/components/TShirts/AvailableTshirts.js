import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableTshirts.module.css";
import Tshirt from "./Tshirt/Tshirt";
import AddTshirt from "./AddTshirt";

export const DUMMY_MedicineS = [
  {
    id: Math.random(),
    name: "Navi Blue",
    description: "100% cotton",
    price: 700,
  },
  {
    id: Math.random(),
    name: "Yellow redTape",
    description:
      "100% cotton and easy to wash",
    price: 500,
  },
  {
    id: Math.random(),
    name: "Dark green Armani",
    description: "Full Sleeves",
    price: 1299,
  },
  {
    id: Math.random(),
    name: "Zara",
    description: "100% cotton and full sleeve",
    price: 1899,
  },
];

const AvailableTshirts = () => {
  const [Tshirts, newTshirts] = useState();
  const addTshirts = (Tshirt) => {
    newTshirts((prevTshirt) => {
      return [Tshirt, ...prevTshirt];
    });
  };
  const Tshirt = Tshirts.map((Tshirt) => (
    <Tshirt
      id={Tshirt.id}
      key={Tshirt.id}
      name={Tshirt.name}
      description={Tshirt.description}
      price={Tshirt.price}
    />
  ));

  return (
    <>
      <AddTshirt onAddTshirt={addTshirts} />
      <section className={classes.Tshirts}>
        <Card>
          <ul>{Tshirt}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableTshirts;