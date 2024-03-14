import React from "react";
import Card from "./Card";

const List = ({ data }) => {
  if (data.length <= 0) {
    return <div>목록 없음</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {data.map((a, i) => {
          return <Card item={data[i]} index={i} key={data[i].id}></Card>;
        })}
      </div>
    </div>
  );
};

export default List;
