import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const 번호 = state.findIndex((item) => item.id === action.payload);
      state[번호].count++;
    },
    subCount(state, action) {
      const 번호 = state.findIndex((item) => item.id === action.payload);

      if (state[번호].count <= 1) {
        state[번호].count = 1;
      } else {
        state[번호].count--;
      }
    },
    addItem(state, action) {
      const newData = action.payload;
      const 번호 = state.findIndex((item) => item.id === newData.id);

      if (번호 !== -1) {
        state[번호].count += newData.count;
      } else {
        state.push(newData);
      }
    },
    deleteItem(state, action) {
      if (action.payload === undefined) return;
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export let { addCount, subCount, addItem, deleteItem } = cart.actions;

export default cart;
