import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isCartVisible: false, statusMessage: null };

const mainSlice = createSlice({
  name: "main",
  initialState: initialCartState,
  reducers: {
    toggleCartVisible(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showStatusMassage(state, action) {
      state.statusMessage = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice.reducer;
