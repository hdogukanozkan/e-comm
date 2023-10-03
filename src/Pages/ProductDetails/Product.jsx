import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import Details from "./Components/Details";
import { useEffect, useState } from "react";

const Product = () => {
  /* Seçili ana img */
  const [defaultImg, setDefaultImg] = useState();
  /* Ürün bilgileri */
  const [product, setProduct] = useState({
    id: 1,
    name: "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
    price: 56,
    stars: 5,
    marka: "Xiaomi",
    images: [
      "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1517329782449-810562a4ec2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80",
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80",
    ],
  });

  /* resimlerin altında, ilk resim ana resim olur */
  useEffect(() => {
    setDefaultImg(product?.images[0]);
  }, []);

  return (
    <div>
      <div className="mb-2 text-gray-500">
        <p>Anasayfa - elektronik - medya oynatıcı</p>
      </div>
      <div className="flex flex-row gap-4">
        {/* İmage Container */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="image-container">
            <img src={defaultImg} />
          </div>
          <div className="images">
            {product?.images.map((img) => (
              <img
                src={img}
                alt="img-test"
                onClick={() => setDefaultImg(img)}
              />
            ))}
          </div>
        </div>
        {/* Product detail title price vb. */}
        <div className="flex-1 bg-gray-100 py-10 px-5 h-fit">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <span className="text-gray-500">marka: {product.marka}</span>
          <p className="flex flex-col mt-10">
            <span className="text-4xl font-bold">{product.price},00$</span>
            <span className="mt-1 ">
              31,05 TL x 36 ay alışveriş kredisi seçeneği ile
            </span>
          </p>
          <div className="mt-10">
            <h3 className="text-sm">
              Satıcı:{" "}
              <span className="text-lg font-bold">Bizimsitemiz.com</span>
            </h3>
          </div>
          <div className="mt-2">
            <button className="bg-mainColor text-white text-xl py-4 px-4 rounded-md hover:bg-opacity-80 font-bold flex gap-2">
              <AiOutlineShoppingCart size={25} /> Sepete Ekle
            </button>
          </div>

          <div className="flex gap-5 mt-10 text-xl">
            <p className="cursor-pointer flex gap-2 items-center hover:text-mainColor transition-all">
              <AiOutlineHeart size={25} /> Beğen
            </p>
            <p className="cursor-pointer flex gap-2 items-center hover:text-mainColor transition-all">
              <BiAddToQueue size={25} />
              İstek Listesi
            </p>
          </div>
        </div>
      </div>
      {/* Product description */}
      <Details />
    </div>
  );
};

export default Product;
/* 

 <h2>Kargo bilgisi</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              labore perspiciatis consequuntur dicta totam nam saepe? Quidem
              provident dolor, quaerat hic harum laudantium? Non eos vitae
              aliquam accusamus velit esse!
            </p>
*/
