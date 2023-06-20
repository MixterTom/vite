import { useContext, useEffect, useState } from "react";
import "./Nav.scss";
import Login from "../../Login/Login";
import LoginPhone from "../../Login/LoginPhone";
import imageWhite from '../../img/logo-pis-white.png';
import imageBlack from '../../img/logo-pis-black.png';
import { ThemeContext } from "../../../../utils/ThemeContext";
import { LoginContext } from "../../../../utils/LoginContect";
import { ScroolContext } from "../../../../utils/ScroolContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const theme = useContext(ThemeContext);
  const type = useContext(LoginContext);
  const scrool = useContext(ScroolContext);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const nav = document.querySelector(".change-backdground");
    if (scrool.scrool > 0) {
      nav.classList.add("background-scroolDown");
      setUrl(imageBlack);
    } else {
      nav.classList.remove("background-scroolDown");
      setUrl(imageWhite);
    }
  }, [scrool.scrool]);

  function showSubNavPhoneSubList() {
    const sub = document.querySelector(".phone-list-left-sub");
    if (sub.classList.contains("hidden")) {
      sub.classList.remove("hidden");
    } else {
      sub.classList.add("hidden");
    }
  }

  function showSubNavPhone() {
    const susdb = document.querySelector(".over-inPhone-list");
    const loginForm = document.querySelector(".over-inPhone-login");
    if (susdb.classList.contains("hidden")) {
      susdb.classList.remove("hidden");
      if(!loginForm.classList.contains('hidden')){
        loginForm.classList.add('hidden')
      }
    } else {
      susdb.classList.add("hidden");
    }
  }

  function showLoginPhone() {
    const loginForm = document.querySelector(".over-inPhone-login");
    const susdb = document.querySelector(".over-inPhone-list");
    if (loginForm.classList.contains("hidden")) {
      loginForm.classList.remove("hidden");
      if(!susdb.classList.contains('hidden')){
        susdb.classList.add('hidden')
      }
    } else {
      loginForm.classList.add("hidden");
    }
  }
  return (
    <>
      <div className="notForPhone ">
        <div style={{ position: "fixed", width: "100%", zIndex: "1000" }}>
          <div
            className=" header change-backdground"
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              paddingRight: "55px",
              paddingLeft: "55px",
              position: "sticky",
              top: 0,
              maxHeight: "80px",
            }}
          >
            <div
              className="col-lg-1"
              style={{
                width: "202px",
                height: "50px",
              }}
            >
              <img src={url} alt="" style={{ width: "100%", height: "100%" }} />
            </div>

            <div
              className="col-lg-8 asdf"
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-evenly",
                alignItems: "center",
                fontWeight: "500",
                marginLeft: "55px",
              }}
            >
              <div className="cover-direct">
                <h7 className="direct-text">PIS Décor</h7>
              </div>
              <div className="cover-direct">
                <h7 className="direct-text">PIS Apartments</h7>
              </div>
              <div className="cover-direct show-option">
                <h7 className="direct-text">Listings</h7>
                <div
                  style={{
                    height: "30px",
                    width: "270px",
                    backgroundColor: "red",
                    position: "absolute",
                    top: "8%",
                    opacity: "0",
                  }}
                ></div>

                <ul
                  className="option"
                  style={{
                    position: "absolute",
                    top: "5.5rem",
                    right: "42%",
                    padding: "25px 0",
                    listStyleType: "none",
                    backgroundColor: "#151515",
                    height: "329px",
                    width: "288px",
                    zIndex: 1,
                  }}
                >
                  <li className="text-district">
                    <a href="#" className="text-inside">
                      Listing in District 1
                    </a>
                  </li>
                  <li className="text-district">
                    <a href="#" className="text-inside">
                      Listing in District 2
                    </a>
                  </li>
                  <li className="text-district">
                    <a href="#" className="text-inside">
                      Listing in District 3
                    </a>
                  </li>
                  <li className="text-district">
                    <a href="#" className="text-inside">
                      Listing in District 4
                    </a>
                  </li>
                  <li className="text-district">
                    <a href="#" className="text-inside">
                      Listing in Phu Nhuan
                    </a>
                  </li>
                  <li className="text-district">
                    <a href="#" className="text-inside">
                      Listing in Binh Thanh
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cover-direct">
                <h7 className="direct-text">Office for lease</h7>
              </div>
              <div className="cover-direct">
                <h7 className="direct-text">About Us</h7>
              </div>
              <div className="cover-direct">
                <h7 className="direct-text">Contact Us</h7>
              </div>
              <div className="cover-direct">
                <h7 className="direct-text">We Are Hiring</h7>
              </div>
            </div>

            <div
              className="col-lg-2"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row-reverse",
              }}
            >
              <i
                className="bi bi-person-circle login-btn"
                style={{ fontSize: "1.3rem", marginLeft: "55px" }}
                onClick={() => {
                  type.toggleType("login");
                  theme.toggleTheme();
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className={`${theme.theme}`}>
          <Login></Login>
        </div>
      </div>
      <div className="forPhone forIpad" style={{position: "relative", width: "100%", zIndex: "1000"}}>
        <div className="row">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#333",
            }}
          >
            <div>
              <FontAwesomeIcon
                icon={faBars}
                style={{
                  margin: "20px 10px",
                  fontSize: "1.2rem",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  showSubNavPhone();
                }}
              />
            </div>

            <img
              src={imageWhite}
              alt=""
              style={{ width: "170px", userSelect: "none", zIndex:"1000" }}
            />

            <FontAwesomeIcon
              icon={faUser}
              style={{
                margin: "20px 30px",
                fontSize: "1.2rem",
                color: "#ffffff",
                cursor: "pointer",
              }}
              onClick={() => {
                showLoginPhone();
              }}
            />
          </div>
        </div>
        <div className="over-inPhone-list hidden">
          <div className="row showList-inPhone">
            <ul className="phone-list-left">
              <li className="phone-list-texting">PIS Décor</li>
              <li className="phone-list-texting">PIS Apartments</li>
              <li className="phone-list-textin">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems:"center",
                    padding: "10px 20px",
                    borderBottom: "1px solid #fff",
                  }}
                  onClick={() => {
                    showSubNavPhoneSubList();
                  }}
                >
                  Listings <FontAwesomeIcon icon={faChevronUp} rotation={180} />
                </div>
                <ul className="phone-list-left-sub hidden">
                  <li className="phone-list-texting">Listing in District 1</li>
                  <li className="phone-list-texting">Listing in District 2</li>
                  <li className="phone-list-texting">Listing in District 3</li>
                  <li className="phone-list-texting">Listing in District 4</li>
                  <li className="phone-list-texting">
                    Listing in District Phu Nhuan
                  </li>
                  <li className="phone-list-texting">
                    Listing in District Binh Thanh
                  </li>
                </ul>
              </li>
              <li className="phone-list-texting">Office for lease</li>
              <li className="phone-list-texting">About Us</li>
              <li className="phone-list-texting">About Us</li>
              <li className="phone-list-texting">We are Hiring</li>
            </ul>
          </div>
        </div>
        <div className="over-inPhone-login hidden">
          <LoginPhone></LoginPhone>
        </div>
      </div>
    </>
  );
}
