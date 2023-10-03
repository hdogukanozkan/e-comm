import React from "react";

const FormInput = (props) => {
  /*
		Change
		Value 
  */

  const { id, label, errorMessage, numberControls, ...allInputs } = props.input;
  const { onChange, values, errors, handleChangeType } = props;
  const { name } = props.input;

  //Telefon numarası için yalnızca number girdisini kabul edecek kod parçası.
  const numberControl = (event) => {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
    } else if (
      event.keyCode === 8 ||
      event.keyCode === 17 ||
      (event.keyCode >= 37 && event.keyCode <= 40)
    ) {
    } else {
      event.preventDefault();
    }
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          id={name}
          value={values[props.input.name]}
          onChange={onChange}
          onKeyDown={(event) => numberControls && numberControl(event)}
          {...allInputs}
        />
        {name === "password" ? (
          <span
            className="absolute bottom-2 right-3 select-none cursor-pointer hover:opacity-75"
            onClick={() => handleChangeType(props.input)}
          >
            {props.input.type === "password" ? <p>göster</p> : <p>gizle</p>}
          </span>
        ) : (
          ""
        )}
      </div>

      {errors?.[name] && <span className="error d-none">{errors?.[name]}</span>}
    </>
  );
};

export default FormInput;
