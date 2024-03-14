import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../routes/NotFound";
import List from "../components/List";

const Detail = ({ shoes }) => {
  const { id } = useParams();
  if (!id) {
    return <List data={shoes} />;
  }

  const data = shoes.find((item) => item.id == id);
  if (!data) return <NotFound />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            alt="shoes"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{data.title}</h4>
          <p>{data.content}</p>
          <p>{data.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
