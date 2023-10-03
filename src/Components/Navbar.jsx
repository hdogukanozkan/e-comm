import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.userSlice.user);

  if (user.id) {
    console.log("var");
  } else {
    console.log("yok");
  }

  return (
    <div className="flex gap-2 lg:gap-20 justify-between items-center">
      {/* Header / LOGO */}
      <NavLink to={"/"}>
        <h1 className="text-4xl font-bold text-mainColor">N12</h1>
      </NavLink>
      {/* Search Bar */}
      <div className="flex w-full">
        <input
          type="text"
          className="border-2 py-2 border-mainColor outline-none rounded-l-md w-full px-3"
        />
        <button className="bg-mainColor px-4 rounded-r-lg text-white hover:bg-opacity-80 transition-all">
          <BiSearch size={25} />
        </button>
      </div>
      {/* User & Profile menu + Basket */}
      <div className="flex fixed bg-white py-2 border-t border-gray-300 md:border-0 w-full md:w-auto md:static bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0  md:flex-row gap-4 lg:gap-x-5 px-5">
        {user.id ? (
          <span className="accountButton group">
            <RiAccountPinCircleFill size={32} className="text-white" />
            <div className="flex flex-col">
              <h5 className="font-bold">Hesabım</h5>
              <span className="text-ellipsis overflow-hidden whitespace-nowrap text-xs flex-1">
                {user.name ? user.name : user.email}
              </span>
            </div>

            <span className="dropDownMenu group-hover:max-h-[500px]">
              <ul>
                <NavLink to={"/account/order-history"}>
                  <li className="user-link">Siparişlerim</li>
                </NavLink>
                <NavLink to={"/account/profile-edit"}>
                  <li className="user-link">Kullanıcı Bilgilerim</li>
                </NavLink>
                <NavLink to={"/account/like-products"}>
                  <li className="user-link">Beğendiklerim</li>
                </NavLink>
                <NavLink to={"/account/wishlist"}>
                  <li className="user-link">İstek Listesi</li>
                </NavLink>
                <NavLink to={"/account/siktirgit"}>
                  <li className="user-link">Çıkış yap</li>
                </NavLink>
              </ul>
            </span>
          </span>
        ) : (
          <span className="accountButton w-40 cursor-pointer">
            <h5>Giriş yap</h5>
          </span>
        )}

        <button className="border md:border-0 flex-1 border-gray-400 py-2 flex justify-center gap-2 text-lg rounded-md items-center">
          <div className="relative">
            <PiShoppingCartFill
              className="text-gray-700 hover:opacity-80 transition-all"
              size={35}
            />
            <span className="absolute -right-3 -top-3 w-6 h-6 flex justify-center items-center bg-mainColor font-bold aspect-square rounded-full text-white">
              3
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
