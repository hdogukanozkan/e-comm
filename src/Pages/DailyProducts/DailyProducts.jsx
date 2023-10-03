import React, { useState } from "react";
import Product from "../../Components/ProductComponents/Product";

const DailyProducts = () => {
  /* Günlük kampanyası olan fırsat ürünleri */
  const [products] = useState([
    {
      id: 1,
      name: "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 5,
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
    },
    {
      id: 2,
      name: "Onvo OV43250 43' 109 Ekran Uydu Alıcılı Full HD Android Smart LED TV",
      price: 150,
      stars: 4,
      imgURL:
        "https://productimages.hepsiburada.net/s/223/1500/110000202676395.jpg",
    },
  ]);

  return (
    <div>
      <div className="bg-mainColor bg-opacity-70 h-32 flex justify-center items-center mt-5 mb-8 rounded-md">
        <h2 className="text-3xl text-white font-bold"># Ürünler</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 my-3">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default DailyProducts;
