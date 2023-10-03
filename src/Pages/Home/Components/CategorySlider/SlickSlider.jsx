import { useRef, useState } from "react";
import Slider from "react-slick";
import Product from "./Product";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SlickSlider = ({ categoryName, products }) => {
  const [sliderSettings] = useState({
    dataCount: 20 /* TOPLAM KAÇ DATA OLACAK */,
    slidesToShow: 6 /* KAÇ DATA GÖSTERİLECEK */,
    slidesToScroll: 5 /* KAÇ DATA GEÇİLECEK */,
  });
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: sliderSettings.slidesToShow,
    slidesToScroll: sliderSettings.slidesToScroll,
    initialSlide: 0,
    draggable: false,
    afterChange: (current) => setActiveSlide(current),
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative p-4">
      <h2 className="text-2xl mb-2 font-bold text-gray-800">{categoryName}</h2>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <Product
            productName={product.productName}
            stars={product.stars}
            imgURL={product.imgURL}
            price={product.price}
          />
        ))}
      </Slider>
      {activeSlide !== 0 && (
        <button
          className="absolute font-bold -translate-y-1/4 top-1/2 left-0 w-8 h-8 rounded-full flex justify-center items-center bg-white shadow-lg border border-gray-300"
          onClick={previous}
        >
          <AiOutlineLeft size={20} />
        </button>
      )}
      {activeSlide < sliderSettings.dataCount - sliderSettings.slidesToShow && (
        <button
          className="absolute font-bold -translate-y-1/4 top-1/2 right-0 w-8 h-8 rounded-full flex justify-center items-center bg-white shadow-lg border border-gray-300"
          onClick={next}
        >
          <AiOutlineRight size={20} />
        </button>
      )}
    </div>
  );
};

export default SlickSlider;
