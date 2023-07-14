import {createSlice} from "@reduxjs/toolkit";
import {Product} from "../../../components/products/types";

interface IInitialState {
    basketList: Product[]
}

const initialState: IInitialState = {
  basketList: []
};
export const buyBasketSlice = createSlice({
  name: 'buyBasket',
  initialState,
  reducers: {
    onAdd: (state, action) => {
      state.basketList = [...state.basketList, {...action.payload, count: 1}];
      localStorage.setItem('basketList', JSON.stringify(state.basketList));
      return state;
    },
    onRefreshPage: (state, action) => {
      state.basketList = action.payload;
      return state;
    },
    onIncrease: (state, action) => {
      let newEl = {
        ...action.payload,
        count: action.payload.count + 1
      };
      const index = state.basketList.findIndex(
        (el) => el.id === action.payload.id
      );
      state.basketList[index] = newEl;
      localStorage.setItem('basketList', JSON.stringify(state.basketList));

      return state;
    },
    onDecrease: (state, action) => {
      let newEl = {
        ...action.payload,
        count: action.payload.count - 1
      };
      const index = state.basketList.findIndex(
        el => el.id === action.payload.id
      );
      state.basketList[index] = newEl;
      localStorage.setItem('basketList', JSON.stringify(state.basketList));
      return state;
    },
    onRemove: (state, action) => {
      state.basketList = state.basketList.filter(
        (el) => el.id !== action.payload.id
      );
      localStorage.setItem('basketList', JSON.stringify(state.basketList));
      return state;
    }
  }
});

export const {onAdd, onRefreshPage, onDecrease, onRemove, onIncrease} = buyBasketSlice.actions;
export default buyBasketSlice.reducer;