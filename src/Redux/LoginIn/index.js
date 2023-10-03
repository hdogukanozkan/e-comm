import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    loginemail: "",
    loginpassword: "",
  },
  inputs: [
    {
      id: 1,
      name: "loginemail",
      type: "email",
      placeholder: "Email enter..",
      label: "Email",
    },
    {
      id: 2,
      name: "loginpassword",
      type: "password",
      placeholder: "Password enter..",
      label: "Passsword",
    },
  ],
};

export const loginInSlice = createSlice({
  name: "loginIn",
  initialState,
  reducers: {
    onChanges: (state, action) => {
      const { Name, Value } = action.payload;
      state.user = { ...state.user, [Name]: Value };
    },
    passwordChangeType: (state, action) => {
      state.inputs = state.inputs.map((input) => {
        if (input.id === action.payload) {
          if (input.type == "password") {
            return { ...input, type: "text" };
          } else {
            return { ...input, type: "password" };
          }
        } else {
          return input;
        }
      });
    },
  },
});

export const { onChanges, passwordChangeType } = loginInSlice.actions;

export default loginInSlice.reducer;
