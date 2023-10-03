import React from "react";
import Input from "./FormInput";
import { onChanges, passwordChangeType } from "../../../Redux/LoginIn";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = ({ button }) => {
  const dispatch = useDispatch();
  const { user, inputs } = useSelector((state) => state.loginIn);

  const onChange = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;

    dispatch(onChanges({ Name, Value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email !== "" && user.password !== "") {
      console.log(user);
    } else {
      console.log("error");
    }
  };
  const handleChangeType = (password) => {
    dispatch(passwordChangeType(password.id));
  };

  return (
    <form onSubmit={handleSubmit} className={`login ${button ? "" : "active"}`}>
      {inputs?.map((input) => (
        <div className="inputContainer" key={input.id}>
          <Input
            input={input}
            handleChangeType={handleChangeType}
            onChange={onChange}
            values={user}
          />
        </div>
      ))}
      <div className="flex !flex-row gap-x-2">
        <input type="checkbox" className="w-4" /> Beni hatırla
      </div>
      <input type="submit" />

      <div className="flex flex-col gap-y-2 md:!flex-row justify-between">
        <p>Şifremi unuttum..</p>
        <p>
          Üye değil misin? <span className="font-bold">Üye ol</span>
        </p>
      </div>
    </form>
  );
};

export default LoginPage;
