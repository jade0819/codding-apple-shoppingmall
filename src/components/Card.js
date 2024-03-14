import React from "react";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Col md={4} style={{ cursor: "pointer" }}>
      <img
        src={require(`../assets/shoes${item.id + 1}.jpg`)}
        alt="shoes"
        width="80%"
        onClick={() => navigate(`/detail/${item.id}`)}
      />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </Col>
  );
};

export default Card;
