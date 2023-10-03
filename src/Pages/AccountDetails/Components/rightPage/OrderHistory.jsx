import React from "react";

const OrderHistory = () => {
  return (
    <div className="order-history">
      <h3>Order History</h3>
      <div className="flex flex-col">
        <div className="order">
          <div className="header">
            <div>
              <span>Sipariş tarihi</span>
              <p>18 Şubat 2023</p>
            </div>

            <div>
              <span>Sipariş No:</span>
              <p>21312-3123123-242</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="order-details">
              <img src="" alt="ürün" />
              <div>
                <h2>Ürün.Name</h2>
                <p>Satıcı: xxx</p>
                <p>Fiyat : 23,00 $</p>
              </div>
              <p>Detaylar için tıkla</p>
            </div>
          </div>
          <div className="footbar">
            <div>
              <span>Sipariş durumu</span>
              <p>yeşil tik Sipariş tamamlandı</p>
            </div>

            <div>
              <span>Toplam</span>
              <p>1840,00$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
