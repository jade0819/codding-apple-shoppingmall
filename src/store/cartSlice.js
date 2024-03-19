import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCount(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (!state[index].hasOwnProperty("count")) state[index].count = 1;

      if (index !== -1) {
        state[index].count += 1;
      }
    },
    decreaseCount(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index === -1) return;

      if (state[index].count > 1) {
        state[index].count -= 1;
      } else {
        state[index].count = 1;
      }
    },
    addCartItem(state, action) {
      if (action.payload === undefined) return;

      const newData = action.payload;
      const index = state.findIndex((item) => item.id === newData.id);

      if (index !== -1) {
        state[index].count += newData.count;
      } else {
        state.push(newData);
      }
    },
    removeCartItem(state, action) {
      if (action.payload) return;
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { increaseCount, decreaseCount, addCartItem, removeCartItem } =
  cart.actions;

export default cart;
