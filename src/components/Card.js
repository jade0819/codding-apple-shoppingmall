import React from "react";
import Col from "react-bootstrap/Col";

const Card = ({ item, index }) => {
  const imgNum = index + 1;

  return (
    <Col md={4}>
      <img
        src={require(`../assets/shoes${imgNum}.jpg`)}
        alt="shoes"
        width="80%"
      />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </Col>
  );
};

export default Card;
