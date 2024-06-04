import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducer.js";

const store = configureStore({
  reducer: {
    Products: ProductReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;