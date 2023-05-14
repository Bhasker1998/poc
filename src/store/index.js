import { configureStore } from "@reduxjs/toolkit";
import counter from "../reducers/auth";
const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
