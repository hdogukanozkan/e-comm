import SlickSlider from "./Components/CategorySlider/SlickSlider";
import MainCarousel from "./Components/MainCarousel";

const Home = () => {
  const coksatanlarProducts = [
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
    {
      imgURL:
        "https://productimages.hepsiburada.net/s/384/1500/110000403706330.jpg",
      productName:
        "Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box Medya Oynatıcı",
      price: 56,
      stars: 4.5,
    },
  ];

  return (
    <div className="relative -z-10">
      {/* MAİN CAROUSEL */}
      <MainCarousel />
      {/* Categorys => 20 product */}
      <>
        <div className="mt-10">
          <SlickSlider
            products={coksatanlarProducts}
            categoryName={"Çok satanlar"}
          />
        </div>
        <div className="mt-10">
          <SlickSlider
            products={coksatanlarProducts}
            categoryName={"Hanifi Doğukan, sana özel öneriler"}
          />
        </div>

        <div className="mt-10">
          <SlickSlider
            products={coksatanlarProducts}
            categoryName={"Media Player"}
          />
        </div>
        <div className="mt-10">
          <SlickSlider
            products={coksatanlarProducts}
            categoryName={"Android Telefonlar"}
          />
        </div>
      </>
    </div>
  );
};

export default Home;
