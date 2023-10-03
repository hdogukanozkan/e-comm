import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Navbar from "./Components/Navbar";
import AccountDetails from "./Pages/AccountDetails/AccountDetails";
import Home from "./Pages/Home/Home";
import Basket from "./Pages/Basket/Basket";
import DailyProducts from "./Pages/DailyProducts/DailyProducts";
import { useEffect } from "react";
import Product from "./Pages/ProductDetails/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin/Admin";
import KullaniciBilgileri from "./Pages/AccountDetails/Components/rightPage/KullaniciBilgileri";
import AdressBilgisi from "./Pages/AccountDetails/Components/rightPage/AdressBilgisi";
import Destek from "./Pages/AccountDetails/Components/rightPage/Destek";
import OrderHistory from "./Pages/AccountDetails/Components/rightPage/OrderHistory";

function App() {
  useEffect(() => {
    /* Api get user */
    /* Api get product */
  }, []);

  return (
    <>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/auth"
            element={
              <>
                <Navbar />
                <Auth />
              </>
            }
          />
          <Route
            path="/account"
            element={
              <>
                <Navbar />
                <AccountDetails />
              </>
            }
          >
            <Route path="profile-edit" element={<KullaniciBilgileri />} />
            <Route path="adress" element={<AdressBilgisi />} />
            <Route path="help-us" element={<Destek />} />
            <Route path="order-history" element={<OrderHistory />} />
          </Route>
          <Route
            path="/basket"
            element={
              <>
                <Navbar />
                <Basket />
              </>
            }
          />
          <Route
            path="/daily-products"
            element={
              <>
                <Navbar />
                <DailyProducts />
              </>
            }
          />
          <Route
            path="/product/2"
            element={
              <>
                <Navbar />
                <Product />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
