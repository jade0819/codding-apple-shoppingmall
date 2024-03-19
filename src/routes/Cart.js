import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { increase } from "../store2/userSlice2";
import { addCount, subCount, deleteItem } from "../store2/cartSlice2";

const Cart = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h6>{state.user.name}의 장바구니</h6>
      <button onClick={() => dispatch(increase(100))}>
        버튼: {state.user.age}
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>주문관리</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <Btn onClick={() => dispatch(addCount(state.cart[i].id))}>
                  +
                </Btn>
                <Btn onClick={() => dispatch(subCount(state.cart[i].id))}>
                  -
                </Btn>
              </td>
              <td>
                <Btn
                  style={{ fontSize: "11px" }}
                  onClick={() => dispatch(deleteItem(state.cart[i].id))}
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
