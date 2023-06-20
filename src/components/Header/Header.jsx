import "./Header.scss";
import Nav from "./NavbarBig/Nav";
import image from "../img/Header.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Header() {
  return (
    <>
      <div className="header-backgound">
        <div style={{position: "absolute", height: "100%", width:"100%"}}>
          <Fade
            nextArrow={
              <button
                style={{
                  background: "none",
                  border: "0px",
                  width: "20px",
                  zIndex: "2",
                  marginRight: "30px"
                }}
              >
                <svg
                  fill="#fff"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
                </svg>
              </button>
            }
            prevArrow={
              <button
                style={{
                  background: "none",
                  border: "0px",
                  width: "20px",
                  marginLeft:'30px'
                }}
              >
                <svg
                  fill="#fff"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
                </svg>
              </button>
            }
          >
            <div
              style={{
                height: "760px",
                width: "100vw",
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >

            </div>
            <div
              style={{
                height: "760px",
                width: "100vw",
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                filter: "grayscale(100%)"
              }}
            ></div>
          </Fade>
        </div>
        <div>
          <Nav></Nav>
        </div>
        <div className="center-text">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              color: "#ffffff",
              position: "relative",
              zIndex: "1",
              userSelect: "none",
              textAlign: "center",
            }}
          >
            YOUR PLACE WE CARE
          </h1>
        </div>
      </div>
    </>
  );
}
