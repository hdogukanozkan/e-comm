import React from "react";

const InputText = (props) => {
  //Onchange datası olacak
  //Value datası olacak
  // id + type + label ve class belirtilmeli.
  const { id, type, onChange, value, label, ...allProps } = props;

  return (
    <span className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        {...allProps}
      />
    </span>
  );
};

export default InputText;
