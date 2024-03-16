import React from "react";
import List from "../components/List";
import AnimFade from "../components/AnimFade";

const Products = ({ shoes }) => {
  return (
    <AnimFade>
      <List data={shoes} />
    </AnimFade>
  );
};

export default Products;
