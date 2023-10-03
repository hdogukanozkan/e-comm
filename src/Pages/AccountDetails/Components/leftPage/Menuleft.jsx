import React from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineIdcard, AiFillLike } from "react-icons/ai";
import {
  BiSolidHelpCircle,
  BiListPlus,
  BiSolidLocationPlus,
} from "react-icons/bi";
import { BsFillBox2Fill, BsPostcardFill } from "react-icons/bs";
import { CgBox } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Menuleft = () => {
  const datas = [
    {
      title: "hesabım",
      children: [
        {
          icon: <BsPostcardFill className="icon" size={30} />,
          name: "Kullanıcı bilgileri",
          url: "/account/profile-edit",
        },
        {
          icon: <BiSolidLocationPlus className="icon" size={30} />,
          name: "Adres bilgisi",
          url: "/account/adress",
        },
        {
          icon: <BsFillBox2Fill className="icon" size={30} />,
          name: "Siparişlerim",
          url: "/account/order-history",
        },
        {
          icon: <BiListPlus className="icon" size={30} />,
          name: "İstek Listesi",
          url: "/account/wishlist",
        },
        {
          icon: <AiFillLike className="icon" size={30} />,
          name: "Beğendiklerim",
          url: "/account/like-products",
        },
        {
          icon: <BiSolidHelpCircle className="icon" size={30} />,
          name: "Yardım",
          url: "/account/help-us",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <span className="w-[80px] mx-auto flex justify-center items-center bg-gray-700 aspect-square rounded-full">
          <FaUser className="text-gray-300" size={35} />
        </span>
        <h2 className="text-xl font-bold">Hanifi Doğukan Özkan</h2>
      </div>
      <div className="flex flex-col gap-3 ">
        {datas?.map((data, index) => (
          <div key={index}>
            <h3 className="font-bold border-b border-gray-400 pb-2">
              {data.title}
            </h3>
            <div className="flex flex-col gap-2 mt-2">
              {data.children.map((link, index) => (
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to={link.url}
                >
                  <span className="HoverSlide" key={index}>
                    {link.icon}
                    <span>{link.name}</span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menuleft;
