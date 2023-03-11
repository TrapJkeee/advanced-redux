import { configureStore } from "@reduxjs/toolkit";
import mainReduser from "./main-slice";
import cartReduser from "./cart-slice";

const store = configureStore({
  reducer: {
    main: mainReduser,
    cart: cartReduser,
  },
});

export default store;
