import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Cart = () => {
  let state = useSelector((state) => {
    return state;
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
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>안녕</td>
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
