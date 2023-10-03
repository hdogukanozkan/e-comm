import React from "react";

const Footer = () => {
  return (
    <div className="bg-mainColor bg-opacity-25 relative z-0 mt-10">
      <div className="flex md:flex-row flex-col text-center md:text-left gap-3 main-container">
        <div className="footer-div">
          <h2>Site. Name</h2>
          <ul>
            <li>Biz kimiz</li>
            <li>Kariyer</li>
            <li>İletişim</li>
          </ul>
          <div>Güvenli alışveriş Logoları ve yazısı</div>
        </div>
        <div className="footer-div">
          <h2>Social media</h2>
          <ul>
            <li>İnstagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
          <h2>Mobil uygulamalarımız</h2>
          <ul>
            <li>google store</li>
            <li>apple store</li>
          </ul>
        </div>
        <div className="footer-div">
          <h2>Yardım</h2>
          <ul>
            <li>Sıkça sorulan sorular</li>
            <li>Canlı yardım</li>
            <li>Nasıl iade ederim</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
