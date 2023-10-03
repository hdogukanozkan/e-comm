import React, { useEffect, useState } from "react";
import InputText from "../../../../Components/inputlar/InputText";

const KullaniciBilgileri = () => {
  const [errors, setErrors] = useState("");
  const [buttonAktif, setButtonAktif] = useState(true);
  /* onChange ile kullanıcının yazdıkları */
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    gender: "",
  });

  /* Çektiğim veriler */
  const [apiUser, setApiUser] = useState({
    name: "Hanifi Doğukan",
    /* 
    input detayları
    label: Name,
    id:name,
    type:text,
    value:user.name,
    onChange:onChangeUserDetails,
    className
    */
    lastName: "Özkan",
    /* 
    label: Last Name,
    id:lastName,
    type:text,
    value:user.lastName,
    onChange:onChangeUserDetails,
    className
    */
    email: "hanifidogukanozkan@gmail.com",
    /* 
    label: Email,
    id:email,
    type:text,
    value:user.email,
    onChange:onChangeUserDetails,
    className
    */
    phoneNumber: "(544) 848 - 5726",
    /* 
    label: Phone Number,
    id:phoneNumber,
    type:text,
    value:user.phoneNumber,
    onChange:onChangeUserDetails,
    className
    */
    date: "13/07/2000",
    gender: "1",
  });

  useEffect(() => {
    setUser(apiUser);
  }, []);

  const PhoneNumberFormat = (number) => {
    if (!number) return number;
    const phoneNumberr = number.replace(/[^\d]/g, "");
    console.log(phoneNumberr);
    const phoneNumberLength = phoneNumberr.length;

    if (phoneNumberLength < 4) return phoneNumberr;
    if (phoneNumberLength < 7) {
      return `(${phoneNumberr.slice(0, 3)}) ${phoneNumberr.slice(3)}`;
    }
    return `(${phoneNumberr.slice(0, 3)}) ${phoneNumberr.slice(
      3,
      6
    )} - ${phoneNumberr.slice(6, 10)}`;
  };

  const DateNumberFormat = (date) => {
    const BirthdayNumber = date.replace(/[^\d]/g, "");
    console.log(BirthdayNumber);
    if (BirthdayNumber.length <= 2) {
      return BirthdayNumber;
    }
    if (BirthdayNumber.length <= 4) {
      return `${BirthdayNumber.slice(0, 2)}/${BirthdayNumber.slice(2, 4)}`;
    }

    return `${BirthdayNumber.slice(0, 2)}/${BirthdayNumber.slice(
      2,
      4
    )}/${BirthdayNumber.slice(4, 8)}`;
  };

  const onChangeUserDetails = (e) => {
    if (e.target.name == "gender") {
      if (user.gender === e.target.value) {
        setUser({ ...user, [e.target.name]: "" });
      } else {
        setUser({ ...user, [e.target.name]: e.target.value });
      }
    } else if (e.target.id == "phoneNumber") {
      setUser({ ...user, [e.target.id]: PhoneNumberFormat(e.target.value) });
    } else if (e.target.id == "date") {
      setUser({ ...user, [e.target.id]: DateNumberFormat(e.target.value) });
    } else {
      setUser({ ...user, [e.target.id]: e.target.value });
    }
  };

  /* BUttonun disabled durumunu check ediyor */
  useEffect(() => {
    setButtonAktif(JSON.stringify(apiUser) === JSON.stringify(user));
  }, [user]);

  const Validation = () => {
    let allErrors = {};

    /* NAME */

    if (user.name === "") {
      allErrors.name = "Boş geçilemez";
    } else if (user.name.length > 21) {
      allErrors.name = "21 karakterden fazla olamaz";
    } else if (user.name.length < 3) {
      allErrors.name = "3 karakterden az olamaz";
    }

    /* LAST NAME */
    if (user.lastName.length == 0) {
      allErrors.lastName = "Boş geçilemez";
    } else if (user.lastName.length > 21) {
      allErrors.lastName = "21 karakterden fazla olamaz";
    } else if (user.lastName.length < 3) {
      allErrors.lastName = "3 karakterden az olamaz";
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    /* EMAİL */
    if (user.email == "") {
      allErrors.email = "Boş geçilemez";
    } else if (regex.test(String(user.email).toLowerCase()) === false) {
      allErrors.email = "Geçersiz email adresi";
    } else if (user.email.length > 40) {
      allErrors.email = "40 karakterden de uzun yazma be kardeş";
    } else if (user.email.length < 5) {
      allErrors.email = "5 karakterden de kısa yazma be kardeş";
    }
    /* Telefon numarası */

    if (user.phoneNumber == "") {
      allErrors.phoneNumber = "Boş geçilemez";
    } else if (user.phoneNumber.length !== 16) {
      allErrors.phoneNumber = "Eksik veya hatalı tuşladınız";
    }

    return allErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hatalar = Validation();
    setErrors(hatalar);

    if (Object.keys(hatalar).length == 0) {
      console.log("işlem başarılı");
    } else {
      console.log("HATA VAR");
      console.log(hatalar);
    }
  };

  return (
    <form
      className="md:border border-gray-300 py-5 md:p-5 rounded-lg max-w-[700px] mx-auto flex flex-col gap-3 md:gap-6"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-2xl text-center">Kullanıcı Bilgileri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <InputText
          label={"Name"}
          value={user.name}
          onChange={onChangeUserDetails}
          id={"name"}
          type={"text"}
          className="inputlar"
        />

        <InputText
          label={"Last Name"}
          value={user.lastName}
          onChange={onChangeUserDetails}
          id={"lastName"}
          type={"text"}
          className="inputlar"
        />
      </div>

      <InputText
        label={"Email"}
        value={user.email}
        onChange={onChangeUserDetails}
        id={"email"}
        type={"text"}
        className="inputlar"
      />

      <InputText
        label={"Phone Number"}
        value={user.phoneNumber}
        onChange={onChangeUserDetails}
        id={"phoneNumber"}
        type={"text"}
        className="inputlar"
        maxLength={16}
      />

      <div className="flex flex-col md:flex-row gap-2 ">
        <div className="flex-1 ">
          <span>Gender:</span>
          <div className="flex gap-3">
            <label
              htmlFor="gender0"
              className={`cursor-pointer text-base flex flex-row gap-2 justify-center items-center border border-gray-300 py-2 px-8 select-none rounded-lg transition-all ${
                user.gender == "0"
                  ? "!bg-mainColor !bg-opacity-50 text-white"
                  : ""
              }`}
            >
              <input
                id="gender0"
                name="gender"
                type="checkbox"
                onChange={onChangeUserDetails}
                value={"0"}
                checked={user.gender == "0"}
                className="hidden border-2 border-gray-300 py-2 px-2 rounded-md outline-none hover:bg-gray-100 focus:bg-transparent focus:border-mainColor "
              />
              <span>Kadın</span>
            </label>
            <label
              htmlFor="gender1"
              className={`cursor-pointer text-base flex flex-row gap-2 justify-center items-center border border-gray-300 py-2 px-8 select-none rounded-lg transition-all ${
                user.gender == "1"
                  ? "!bg-mainColor !bg-opacity-50 text-white"
                  : ""
              }`}
            >
              <input
                id="gender1"
                name="gender"
                type="checkbox"
                onChange={onChangeUserDetails}
                value={"1"}
                checked={user.gender == "1"}
                className="hidden border-2 border-gray-300 py-2 px-2 rounded-md outline-none hover:bg-gray-100 focus:bg-transparent focus:border-mainColor "
              />
              <span>Erkek</span>
            </label>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <span>Date:</span>
          <div className="flex-1">
            <input
              id="date"
              type="text"
              value={user.date}
              placeholder="dd/aa/yyyy"
              onChange={onChangeUserDetails}
              maxLength={10}
              className="inputlar"
            />
          </div>
        </div>
      </div>

      <input
        disabled={buttonAktif}
        type="submit"
        value={"Dönder"}
        className="border border-mainColor bg-mainColor hover:bg-opacity-90 text-white py-2 w-full cursor-pointer transition-all rounded-md block disabled:bg-gray-500 disabled:cursor-not-allowed"
      />
    </form>
  );
};

export default KullaniciBilgileri;
