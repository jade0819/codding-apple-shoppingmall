import React from "react";
import List from "../components/List";
import AnimFade from "../components/AnimFade";

const Products = ({ data }) => {
  return (
    <AnimFade>
      <List data={data} />
    </AnimFade>
  );
};

export default Products;
