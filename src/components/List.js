import React from "react";
import Card from "./Card";

const List = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.length > 0 &&
          data.map((item, index) => {
            return <Card item={item} index={index} key={item.id}></Card>;
          })}
      </div>
    </div>
  );
};

export default List;
