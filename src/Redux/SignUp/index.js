import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    email: "",
    password: "",
    repassword: "",
    uyelikSozlesmesi: true,
    kampanyaHaber: false,
  },
  inputs: [
    {
      id: 3,
      name: "email",
      type: "text",
      label: "Email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
    },
    // Emailin genel kuralları olsun
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    },
    // -- şifre koşulları--
    // 1 büyük harf
    // 1 küçük harf
    // 1 sayı
    // 1 özel işaret
    {
      id: 5,
      name: "repassword",
      type: "password",
      label: "Re-enter Password",
      placeholder: "Password",
      errorMessage: "Passwords don't match!",
    },
    // şifreler aynı olsun.
  ],
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    changeValues: (state, action) => {
      const { valueData, valueName } = action.payload;

      state.values = {
        ...state.values,
        [valueName]: valueData,
      };
    },
    changeValuesUyelikSozlesmesi: (state) => {
      state.values = {
        ...state.values,
        uyelikSozlesmesi: !state.values.uyelikSozlesmesi,
      };
    },
    changeValuesKampanya: (state) => {
      state.values = {
        ...state.values,
        kampanyaHaber: !state.values.kampanyaHaber,
      };
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

// TELEFON FORMATTİNG
const normalizeInput = (value, previousValue) => {
  if (!value) return value;
  const currentValue = value.replace(/[^\d]/g, "");
  const cvLength = currentValue.length;

  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 4) return currentValue;
    if (cvLength < 7)
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
      3,
      6
    )}-${currentValue.slice(6, 10)}`;
  }
};

export const {
  changeValues,
  changeValuesUyelikSozlesmesi,
  changeValuesKampanya,
  passwordChangeType,
} = signUpSlice.actions;

export default signUpSlice.reducer;

/*
{
  id: 2,
  name: "birthday",
  type: "date",
  label: "Birthday",
  placeholder: "Birthday",
},
/* Doğum tarihi üzerine pettern yapamadım */
// 1930 ÖNCESİ KABUL EDİLMESİN
// 18  YAŞ ŞARTI
/* 
        10 NUMARA OLSUN
        0 BAŞLANGIÇTA OLMASIN
        SADECE NUMARALAR           
*/
