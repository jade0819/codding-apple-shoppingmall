import React from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import NotFound from "./NotFound";

const Detail = ({ shoes }) => {
  const { id } = useParams();
  if (!id) {
    return <List data={shoes} />;
  }

  const data = shoes.filter((item) => item.id === Number(id))[0];
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
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
