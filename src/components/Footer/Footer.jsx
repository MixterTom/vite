import { useState } from "react";
import "./Footer.scss";
import Footer1 from "../img/bg-footer.png"

function Footer() {
  const [money, setMoney] = useState("USD");
  const [show, setShow] = useState(false);
  function option(value) {
    setMoney(value);
    inputShow();
  }
  function inputShow() {
    const option = document.querySelector(".FooterPriceMenu");
    setShow(!show);
    if (show) {
      option.classList.add("hidden");
    } else {
      option.classList.remove("hidden");
    }
  }
  return (
    <>
      <div className="Footer row" style={{backgroundImage:`url(${Footer1})`}}>
        <div className="FooterPrice col-lg-4">
          <div className="FooterPriceNEW">
            <span>Change Your Currency</span>
            <input
              className="FooterPriceInputCurrent"
              placeholder="USD"
              value={money}
              onClick={() => {
                inputShow();
              }}
              readOnly
            ></input>
            <i className="bi bi-chevron-down"></i>
          </div>
          <div className="FooterPriceMenu ">
            <div
              className="FooterPriceNation"
              onClick={() => {
                option("USD");
              }}
            >
              USD
            </div>
            <div
              className="FooterPriceNation"
              onClick={() => {
                option("VND");
              }}
            >
              VND
            </div>
            <div
              className="FooterPriceNation"
              onClick={() => {
                option("EUR");
              }}
            >
              EUR
            </div>
            <div
              className="FooterPriceNation"
              onClick={() => {
                option("JPY");
              }}
            >
              JPY
            </div>
            <div
              className="FooterPriceNation"
              onClick={() => {
                option("CAD");
              }}
            >
              CAD
            </div>
          </div>
        </div>

        <div className="FooterPlace col-lg-4">
          <span>PLACE IN SAIGON</span>
          <div className="FooterPlaceIcon">
            <span>
              <i className="bi bi-house-door"></i>
              62G Vo Thi Sau, Tan Dinh, Dist.1, HCMC
            </span>
            <span>
              <i className="bi bi-balloon-fill"></i>
              95D Nguyen Van Thu, Da Kao, Dist.1, HCMC
            </span>
            <span>
              <i className="bi bi-phone-fill"></i>
              0938 999 028 – 088 6686 228
            </span>
            <span>
              <i className="bi bi-envelope-fill"></i>
              info@placeinsaigon.com
            </span>
            <span>
              <i className="bi bi-compass-fill"></i>
              placeinsaigon.com
            </span>
          </div>
        </div>
        <div className="FooterSocial col-lg-4">
          <span>Connect With Us</span>
          <div className="FooterSocialIcon">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
      </div>
      <div className="FooterEnd row">
        <span>All rights reserved by Place in Saigon © Copyright 2021</span>
      </div>
    </>
  );
}
export default Footer;
