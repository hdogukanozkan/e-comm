import React, { useState } from "react";
import InputText from "../../../../Components/inputlar/InputText";

const Destek = () => {
  const [supportForm, setSupportForm] = useState({
    emailadres: "",
    subject: "",
    detail: "",
  });

  const handleChange = (e) => {
    setSupportForm({ ...supportForm, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dönder");
  };
  return (
    <div className="md:border max-w-[750px] mx-auto md:p-5">
      <h1 className="mb-5 text-4xl font-bold text-center text-mainColor ">
        Destek formu
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <InputText
          label="Konu"
          id="subject"
          type="text"
          className="inputlar"
          value={supportForm.subject}
          onChange={handleChange}
        />
        <InputText
          label="Email"
          id="emailadres"
          type="email"
          className="inputlar"
          value={supportForm.emailadres}
          onChange={handleChange}
        />

        <div className="flex flex-col">
          <label id="detail">Açıklama</label>
          <textarea
            rows={6}
            id="detail"
            value={supportForm.detail}
            onChange={handleChange}
            className="inputlar"
          />
        </div>
        <div className="flex justify-end gap-4">
          <input
            type="submit"
            value={"Gönder"}
            className="border border-mainColor bg-mainColor text-white font-bold text-lg py-2 px-8 rounded-md"
          />
          <input
            onClick={() =>
              setSupportForm({
                emailadres: "",
                subject: "",
                detail: "",
              })
            }
            type="reset"
            value={"Sil"}
            className="border border-red-700 bg-red-700 text-white font-bold text-lg py-2 px-12 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Destek;
