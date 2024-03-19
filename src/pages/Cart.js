import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  increaseCount,
  decreaseCount,
  removeCartItem,
} from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수량변경</th>
            <th>주문관리</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <Btn onClick={() => dispatch(increaseCount(item.id))}>+</Btn>
                <Btn onClick={() => dispatch(decreaseCount(item.id))}>-</Btn>
              </td>
              <td>
                <Btn
                  style={{ fontSize: "12px" }}
                  onClick={() => dispatch(removeCartItem(item.id))}
                >
                  삭제
                </Btn>
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
  min-width: 28px;
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
