import React, { useState } from "react";

const Details = () => {
  const [menu, setMenu] = useState("1");

  const renderSwitch = (param) => {
    switch (param) {
      case "1":
        return (
          <>
            <h1 className="text-lg font-bold mb-2">Ürün Özellikleri</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              voluptatum ut maiores dignissimos fugiat inventore officiis,
              corrupti adipisci nostrum iusto earum aliquam, consequuntur animi
              odit tempora rem debitis sed. Nesciunt cupiditate exercitationem a
              inventore, dolor debitis hic architecto omnis adipisci quis
              necessitatibus assumenda ratione eius unde, error officia, est
              accusantium?
            </p>
          </>
        );
        break;
      case "2":
        return (
          <>
            <h1 className="text-lg font-bold mb-2">YORUMLAR</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              voluptatum ut maiores dignissimos fugiat inventore officiis,
              corrupti adipisci nostrum iusto earum aliquam, consequuntur animi
              odit tempora rem debitis sed. Nesciunt cupiditate exercitationem a
              inventore, dolor debitis hic architecto omnis adipisci quis
              necessitatibus assumenda ratione eius unde, error officia, est
              accusantium?
            </p>
          </>
        );
        break;
      case "3":
        return (
          <>
            <h1 className="text-lg font-bold mb-2">Taksit Seçenekleri</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              voluptatum ut maiores dignissimos fugiat inventore officiis,
              corrupti adipisci nostrum iusto earum aliquam, consequuntur animi
              odit tempora rem debitis sed. Nesciunt cupiditate exercitationem a
              inventore, dolor debitis hic architecto omnis adipisci quis
              necessitatibus assumenda ratione eius unde, error officia, est
              accusantium?
            </p>
          </>
        );
        break;
      case "4":
        return (
          <>
            <h1 className="text-lg font-bold mb-2">Kargo Bilgisi</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              voluptatum ut maiores dignissimos fugiat inventore officiis,
              corrupti adipisci nostrum iusto earum aliquam, consequuntur animi
              odit tempora rem debitis sed. Nesciunt cupiditate exercitationem a
              inventore, dolor debitis hic architecto omnis adipisci quis
              necessitatibus assumenda ratione eius unde, error officia, est
              accusantium?
            </p>
          </>
        );
        break;
      default:
        break;
    }
  };
  const [detailsNav, setDetailsNav] = useState([
    {
      id: "1",
      input: {
        type: "radio",
        id: "radio-1",
        name: "urun_ozellikleri",
        value: "1",
        label: "ÜRÜN ÖZELLİKLERİ",
      },
    },
    {
      id: "2",
      input: {
        type: "radio",
        id: "radio-2",
        name: "urun_yorumlarİ",
        value: "2",
        label: "YORUMLAR",
      },
    },
    {
      id: "3",
      input: {
        type: "radio",
        id: "radio-3",
        name: "taksit_durumu",
        value: "3",
        label: "TAKSİT DURUMU",
      },
    },
    {
      id: "4",
      input: {
        type: "radio",
        id: "radio-4",
        name: "kargo_bilgisi",
        value: "4",
        label: "KARGO BİLGİSİ",
      },
    },
  ]);

  return (
    <div className="product-detail-container">
      <div className="nav">
        {detailsNav.map((nav) => (
          <React.Fragment key={nav.id}>
            <input
              type={nav.input.type}
              id={nav.input.id}
              value={nav.input.value}
              checked={nav.input.value === menu}
              onChange={(e) => {
                setMenu(e.target.value);
              }}
            />
            <label
              className={`tab ${menu === nav.input.value ? "active" : ""} `}
              htmlFor={nav.input.id}
            >
              {nav.input.label}
            </label>
          </React.Fragment>
        ))}
      </div>
      <div className="text">{renderSwitch(menu)}</div>
    </div>
  );
};

export default Details;
