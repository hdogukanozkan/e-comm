import React, { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Basket = () => {
  const [sepetTotal, setSepetTotal] = useState(0); /* Toplam ödenecek money */
  /* Sepette ki ürünler */
  const [baskets, setBaskets] = useState([
    {
      id: 1,
      name: "Honor X9a 128 GB 8 GB RAM 5G (Honor Türkiye Garantili)",
      price: 50,
      ozellik: "Beden:S",
      piece: 1,
      discountRate: 1,
    },
    {
      id: 2,
      name: "Honor X9a 128 GB 8 GB RAM 5G (Honor Türkiye Garantili)",
      price: 50,
      ozellik: "Beden:S",
      piece: 1,
      discountRate: 0.5,
    },
  ]);

  /* Sepettekilere göre Fiyat güncellemesi */
  useEffect(() => {
    let d = 0;
    if (baskets.length === 0) {
      d = 0;
      setSepetTotal(d);
    } else {
      baskets.map((basket) => {
        d += basket.price * basket.discountRate * basket.piece;
      });
      setSepetTotal(d);
    }
  }, [baskets]);

  /* Sepetten ürün silme */
  const deleteHandle = (item) => {
    setBaskets(baskets.filter((basket) => basket.id !== item.id));
  };

  /* Ürün adetini azaltma */
  const adetAzalt = (basket) => {
    setBaskets(
      baskets.map((b) => {
        if (basket.piece == 1) {
          console.log("çalışmaz");
        } else if (b.id === basket.id) {
          // Eşleşen öğeyi güncelle
          return { ...b, piece: basket.piece - 1 };
        }
        return b;
      })
    );
  };

  /* Ürün adet arttırma */
  const adetArttır = (basket) => {
    setBaskets(
      baskets.map((b) => {
        if (b.id === basket.id) {
          // Eşleşen öğeyi güncelle
          return { ...b, piece: basket.piece + 1 };
        }
        return b;
      })
    );
  };

  return (
    <div className="flex md:flex-row flex-col gap-4 mt-4">
      {/* Left */}
      <div className="border border-gray-400 rounded-lg flex-1 py-10 px-2 md:px-10 flex flex-col md:gap-4 gap-2">
        {baskets.map((basket) => (
          <div
            className="flex gap-2 items-center border-b-2 pb-4 pt-0 md:pt-4"
            key={basket.id}
          >
            <img
              src="https://productimages.hepsiburada.net/s/358/250/110000371749212.jpg"
              alt={basket.name}
              className="w-24 md:w-32"
            />
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-base md:text-xl">{basket.name}</h3>
              <div>
                <span className="text-sm bg-mainColor text-white px-2 py-1 rounded-full">
                  {basket.ozellik}
                </span>
              </div>
              <div className="flex gap-4 mt-3">
                <span className="w-auto h-[30px] md:w-[100px] md:h-[35px] flex flex-row gap-1 md:gap-2 bg-gray-300 rounded-l-full rounded-r-full shadow-md">
                  <button
                    className="flex-1 flex justify-center items-center hover:bg-mainColor hover:bg-opacity-20 text-mainColor aspect-square rounded-full"
                    onClick={() => adetAzalt(basket)}
                  >
                    <AiOutlineMinus size={15} />
                  </button>
                  <span className="flex-1 flex items-center justify-center">
                    {basket.piece}
                  </span>
                  <button
                    className="flex-1 flex justify-center items-center hover:bg-mainColor hover:bg-opacity-20 text-mainColor aspect-square rounded-full"
                    onClick={() => adetArttır(basket)}
                  >
                    <AiOutlinePlus size={15} />
                  </button>
                </span>
                <button
                  className=" text-red-700 hover:text-red-500 transition-all text-2xl md:text-3xl rounded-full"
                  onClick={() => deleteHandle(basket)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>

            <span className="text-lg flex flex-col items-center">
              {basket.discountRate !== 1 ? (
                <span className="line-through">{basket.price} $</span>
              ) : (
                ""
              )}
              <span className="text-xl font-bold text-mainColor">
                {basket.price * basket.discountRate * basket.piece} $
              </span>
            </span>
          </div>
        ))}
      </div>
      {/* Right */}
      <div className="h-fit md:max-w-[250px] max-w-full w-full bg-gray-100 flex flex-col py-4 px-4 gap-4 ">
        <h2 className="font-bold text-mainColor">SEÇİLEN ÜRÜNLER</h2>
        <p className="flex justify-between items-center">
          <span className="font-bold text-3xl text-gray-900">
            {sepetTotal} $
          </span>
        </p>
        <button className="text-white bg-mainColor bg-opacity-80 hover:bg-opacity-100 py-3 rounded-lg font-bold">
          Alışverişi tamamla
        </button>
      </div>
    </div>
  );
};

export default Basket;
