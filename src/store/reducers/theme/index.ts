import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    color: boolean
}

const initialState: IInitialState = {
  color: false
};
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onBlueMode: (state) => {
      state.color = true;
    },
    onPinkMode: (state) => {
      state.color = false;
    }
  }
});

export const {onBlueMode, onPinkMode} = themeSlice.actions;
export default themeSlice.reducer;