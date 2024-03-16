import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Cart = () => {
  let cart = useSelector((state) => {
    return state.cart;
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <Btn>+</Btn>
                <Btn>-</Btn>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;

const Btn = styled.button`
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: solid 1px lightgrey;
  border-radius: 3px;
  margin-right: 1px;

  &:hover {
    background-color: white;
    opacity: 0.5;
  }
`;
