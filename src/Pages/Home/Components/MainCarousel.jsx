import Slider from "react-slick";

const MainCarousel = () => {
  const settings = {
    dots: true,
    Infinity: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };

  return (
    <Slider {...settings} className="gap-2">
      <div className="w-full min-h-[450px] border-2 border-white bg-mainColor text-white rounded-md p-4 !flex flex-row gap-4">
        <div className="flex-1 flex flex-col h-auto items-center justify-center">
          <h2 className="text-3xl font-bold">
            Bakım ürünlerinde KAÇMAZ FIRSAT!
          </h2>
          <p className="mt-5 bg-white text-mainColor font-extrabold p-4 text-lg rounded-md cursor-pointer">
            Sepette %50 indirimi KAÇIRMA!
          </p>
        </div>
        <div className="flex-1 ">
          <img
            className="rounded-lg overflow-hidden shadow-2xl"
            src="https://img.freepik.com/free-vector/realistic-brand-cream-background_52683-726.jpg?w=1380&t=st=1694527921~exp=1694528521~hmac=756b88311f9bfcb0967b16d1996b0d6c8026f9b1d28e9fd41ed88eedb60a8b49"
            alt=""
          />
        </div>
      </div>
      <div className="w-full min-h-[450px] border-2 border-white bg-mainColor text-white rounded-md p-4 !flex flex-row gap-4">
        <div className="flex-1 flex flex-col h-auto items-center justify-center">
          <h2 className="text-3xl font-bold">
            Bakım ürünlerinde KAÇMAZ FIRSAT!
          </h2>
          <p className="mt-5 bg-white text-mainColor font-extrabold p-4 text-lg rounded-md cursor-pointer">
            Sepette %50 indirimi KAÇIRMA!
          </p>
        </div>
        <div className="flex-1 ">
          <img
            className="rounded-lg overflow-hidden shadow-2xl"
            src="https://img.freepik.com/free-vector/realistic-brand-cream-background_52683-726.jpg?w=1380&t=st=1694527921~exp=1694528521~hmac=756b88311f9bfcb0967b16d1996b0d6c8026f9b1d28e9fd41ed88eedb60a8b49"
            alt=""
          />
        </div>
      </div>
      <div className="w-full min-h-[450px] border-2 border-white bg-mainColor text-white rounded-md p-4 !flex flex-row gap-4">
        <div className="flex-1 flex flex-col h-auto items-center justify-center">
          <h2 className="text-3xl font-bold">
            Bakım ürünlerinde KAÇMAZ FIRSAT!
          </h2>
          <p className="mt-5 bg-white text-mainColor font-extrabold p-4 text-lg rounded-md cursor-pointer">
            Sepette %50 indirimi KAÇIRMA!
          </p>
        </div>
        <div className="flex-1 ">
          <img
            className="rounded-lg overflow-hidden shadow-2xl"
            src="https://img.freepik.com/free-vector/realistic-brand-cream-background_52683-726.jpg?w=1380&t=st=1694527921~exp=1694528521~hmac=756b88311f9bfcb0967b16d1996b0d6c8026f9b1d28e9fd41ed88eedb60a8b49"
            alt=""
          />
        </div>
      </div>
      <div className="w-full min-h-[450px] border-2 border-white bg-mainColor text-white rounded-md p-4 !flex flex-row gap-4">
        <div className="flex-1 flex flex-col h-auto items-center justify-center">
          <h2 className="text-3xl font-bold">
            Bakım ürünlerinde KAÇMAZ FIRSAT!
          </h2>
          <p className="mt-5 bg-white text-mainColor font-extrabold p-4 text-lg rounded-md cursor-pointer">
            Sepette %50 indirimi KAÇIRMA!
          </p>
        </div>
        <div className="flex-1 ">
          <img
            className="rounded-lg overflow-hidden shadow-2xl"
            src="https://img.freepik.com/free-vector/realistic-brand-cream-background_52683-726.jpg?w=1380&t=st=1694527921~exp=1694528521~hmac=756b88311f9bfcb0967b16d1996b0d6c8026f9b1d28e9fd41ed88eedb60a8b49"
            alt=""
          />
        </div>
      </div>
    </Slider>
  );
};

export default MainCarousel;
