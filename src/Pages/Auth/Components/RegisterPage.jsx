import FormInput from "./FormInput";
import { useSelector, useDispatch } from "react-redux";
import {
  changeValues,
  changeValuesKampanya,
  changeValuesUyelikSozlesmesi,
  passwordChangeType,
} from "../../../Redux/SignUp";

const RegisterPage = ({ button }) => {
  const dispatch = useDispatch();
  const { values, inputs } = useSelector((state) => state.signUpSlice);

  const handleChangeType = (password) => {
    dispatch(passwordChangeType(password.id));
  };
  const handleChange = (e) => {
    const valueData = e.target.value;
    const valueName = e.target.name;
    dispatch(changeValues({ valueData, valueName }));
    //e.target
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //    setErrors(Validation(values));

    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`register ${button ? "active" : ""}`}
    >
      {inputs.map((input) => (
        <div className="inputContainer" key={input.id}>
          <FormInput
            values={values}
            onChange={handleChange}
            input={input}
            handleChangeType={handleChangeType}
          />
        </div>
      ))}
      <p>
        <input
          type="checkbox"
          checked={values.uyelikSozlesmesi}
          onChange={() => dispatch(changeValuesUyelikSozlesmesi())}
        />{" "}
        Üyelik Sözleşmesi şartlarını okudum ve kabul ediyorum.
      </p>
      <p>
        <input
          type="checkbox"
          checked={values.kampanyaHaber}
          onChange={() => dispatch(changeValuesKampanya())}
        />{" "}
        Kampanyalardan haberdar olmak için tarafıma ticari ileti gönderilmesine
        izin veriyorum.
      </p>
      <input className="submitBtn" type="submit" value={"Üye Ol!"} />
      <p style={{ textAlign: "right" }}>
        Zaten Üye misiniz?{" "}
        <span className="font-bold cursor-pointer hover:text-gray-700">
          Giriş Yap
        </span>
      </p>
    </form>
  );
};

export default RegisterPage;
