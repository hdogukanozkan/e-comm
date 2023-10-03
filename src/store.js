import { configureStore } from "@reduxjs/toolkit";
import valueData from "./Redux/SignUp/index";
import loginSlice from "./Redux/LoginIn/index";
import userSlice from "./Redux/User";

export default configureStore({
  reducer: {
    signUpSlice: valueData,
    loginIn: loginSlice,
    userSlice: userSlice,
  },
});
