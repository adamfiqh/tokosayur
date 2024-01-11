// src/store.js
import { createStore, combineReducers } from "redux";
import cartReducer from "./features/Cart/reducer"; // Sesuaikan path dengan struktur sebenarnya

const rootReducer = combineReducers({
  cart: cartReducer,
  // tambahkan reducer lain jika diperlukan
});

const store = createStore(rootReducer);

export default store;
