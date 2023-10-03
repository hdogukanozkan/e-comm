import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 1,
    name: "Hanifi Doğukan",
    lastName: "Özkan",
    phoneNumber: "",
    gender: 1,
    date: "",
    basket: {},
    wishList: {},
    likeProduct: {},
    adress: {},
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    takeUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { takeUserData } = userSlice.actions;

export default userSlice.reducer;
