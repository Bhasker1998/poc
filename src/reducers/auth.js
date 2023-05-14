import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  userName: "",
  profileImg: "",
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

export const { increment } = counter.actions;

export default counter.reducer;
