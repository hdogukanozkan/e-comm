import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdOutlineAddCircle } from "react-icons/md";
import InputText from "../../../../Components/inputlar/InputText";

const AdressBilgisi = () => {
  const [addAdresModal, setAddAdresModal] = useState(false);

  const [adresler, setAdresler] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    adress: "",
    adressName: "",
  });

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

  const handleChange = (e) => {
    if (e.target.id == "phoneNumber") {
      setAdresler({
        ...adresler,
        [e.target.id]: PhoneNumberFormat(e.target.value),
      });
    } else {
      setAdresler({ ...adresler, [e.target.id]: e.target.value });
    }
  };

  return (
    <div className="max-w-[800px] mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2 md:mb-6">
        Teslimat Adreslerim
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Bu sayfada yapacağınız adres değişiklikleri, daha önce vermiş olduğunuz
        siparişleri etkilemez. Vermiş olduğunuz siparişlerin adres değişkliğini
        Siparişlerim alanından gerçekleştirebilirsiniz.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-3 mb-4">
        <div className="relative border border-gray-400 p-2 md:p-4 aspect-square rounded-lg flex flex-col gap-2">
          <h3 className="text-center font-bold text-lg">Adres ismi</h3>
          <p className="flex-1 ">Adres yazısı</p>
          <div className="grid grid-cols-2 gap-2">
            <button className="py-2 rounded-md text-white bg-mainColor bg-opacity-80 hover:bg-opacity-70 transition-all">
              Düzenle
            </button>
            <button className="py-2 rounded-md border border-red-500 hover:bg-red-600 hover:text-white transition-all ">
              Sil
            </button>
          </div>
        </div>
        <div
          className="relative border-2 hover:bg-mainColor hover:bg-opacity-20 text-gray-900 cursor-pointer transition-all border-mainColor p-5 aspect-square rounded-lg"
          onClick={() => setAddAdresModal(true)}
        >
          <h3 className="text-center font-bold">Yeni adres Ekle</h3>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor text-2xl font-bold">
            <MdOutlineAddCircle size={45} />
          </span>
        </div>
      </div>

      {/* MODAL ADD ADRESS */}
      <div
        className={`${
          addAdresModal ? "flex" : "hidden"
        }  absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30 px-2 justify-center items-center `}
      >
        <div className="relative md:max-w-[700px] sm:max-w-[500px] w-full bg-white px-2 py-10 sm:px-10 md:px-20 md:py-16 rounded-lg">
          <h2 className="text-xl text-center font-bold"> Adres Ekle</h2>
          <form>
            <h3 className="my-3 font-bold text-lg">
              Teslim alacak kişinin bilgileri
            </h3>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <InputText
                  label="Name"
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={adresler.name}
                  className="inputlar"
                />
                <InputText
                  label="Last Name"
                  type="text"
                  id="lastName"
                  onChange={handleChange}
                  value={adresler.lastName}
                  className="inputlar"
                />
              </div>
              <InputText
                label="Phone Number"
                type="text"
                id="phoneNumber"
                onChange={handleChange}
                value={adresler.phoneNumber}
                className={"inputlar"}
                placeholder="(5XX) XXX - XXXX"
              />
            </div>
            <h3 className="my-3 font-bold text-lg">Adres bilgileriniz</h3>
            <div className="flex flex-col gap-3 mb-5">
              <span>
                <label htmlFor="adress">Adres:</label>
                <textarea
                  id="adress"
                  onChange={handleChange}
                  value={adresler.adress}
                  className="inputlar w-full"
                  rows={5}
                />
              </span>
              <InputText
                type="text"
                label="Bu adrese bir ad verin"
                id="adressName"
                value={adresler.adressName}
                onChange={handleChange}
                className="inputlar"
              />
            </div>
            <input
              type="submit"
              value="Adresi Kaydet"
              className="w-full py-3 bg-mainColor hover:bg-opacity-80 cursor-pointer transition-all text-white"
            />
          </form>
          <span
            onClick={() => setAddAdresModal(false)}
            className="absolute top-3 right-4 cursor-pointer"
          >
            <GrClose size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdressBilgisi;
