import "./Cardmodel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faClone,
  faShareNodes,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Cardmodel(props) {
  function handleTag() {
    // eslint-disable-next-line react/prop-types
    if (props.tag == "1") {
      return <span className="tagInfo-background-1">Hot offer</span>;
    } else {
      return <span className="tagInfo-background-2">New offer</span>;
    }
  }

  return (
    <>
      <div className="full-hotel-card" style={{ position: "relative" }}>
        <div className="row top-card">
          <div
            className="image-background-house"
            style={{
              // eslint-disable-next-line react/prop-types
              backgroundImage: `url(${props.link})`,
            }}
          ></div>
          <div className="top-card-text">
            <span
              style={{
                backgroundColor: "#EAAB6E",
                padding: "0 12px",
                borderRadius: "2px",
              }}
            >
              Featured
            </span>
            <div className="card-text-tagInfo">
              <span
                className="tagInfo-background"
                style={{ marginRight: "5px" }}
              >
                Rentals
              </span>
              {handleTag()}
            </div>
          </div>

          <div className="bottom-card-text">
            <div>
              <i className="bi bi-geo-alt-fill"></i>
              <span style={{ paddingLeft: "5px" }}>
                {/* eslint-disable-next-line react/prop-types */}
                {props.distric}, Ho Chi Minh City
              </span>
            </div>

            <div>
              <i className="bi bi-camera-fill"></i>
              {/* eslint-disable-next-line react/prop-types */}
              <span style={{ paddingLeft: "5px" }}>{props.picture}</span>
            </div>
          </div>
        </div>

        <div className="row bottom-card">
          <div className="row">
            <h4
              style={{
                padding: "0 20px",
                paddingTop: "15px",
                fontWeight: "700",
                fontSize: "1.2rem",
              }}
            >
              {/* eslint-disable-next-line react/prop-types */}
              {props.name}
            </h4>
          </div>

          <div
            style={{
              fontSize: "17px",
              color: "#2F74BB",
              margin: "5px 0 0 20px",
              padding: "0",
              fontWeight: "600",
            }}
          >
            {/* eslint-disable-next-line react/prop-types */}
            <span style={{ fontSize: "1.2rem" }}>${props.price}</span>
          </div>
          {/* eslint-disable-next-line react/prop-types */}
          <div className="bottom-description-text">{props.descrip}[more]</div>

          <div
            className="row"
            style={{
              marginBottom: "62px",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#333",
                float: "left",
                padding: "0 20px",
                fontSize: "0.8rem",
                flexWrap: "nowrap",
              }}
              className="col-lg-9 col-9 col-md-6"
            >
              <div className="bottom-text-details">
                <FontAwesomeIcon icon={faBed} />
                <span style={{ paddingLeft: "3px" }}>1</span>
              </div>
              <div className="bottom-text-details">
                <FontAwesomeIcon icon={faBath} />
                <span style={{ paddingLeft: "3px" }}>1</span>
              </div>
              <div className="bottom-text-details">
                <FontAwesomeIcon icon={faClone} />
                {/* eslint-disable-next-line react/prop-types */}
                <span style={{ paddingLeft: "3px" }}>{props.area} m</span>
                <sub style={{ top: "-.3rem" }}>2</sub>
              </div>
            </div>

            <div
              className="col-lg-3 col-3 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                color: "#333",
                float: "left",
                padding: "0 20px",
                fontSize: "0.8rem",
                flexWrap: "nowrap",
              }}
            >
              <span className="show-more-inforBTN">details</span>
            </div>
          </div>
        </div>

        <div className="advanced-card">
          <div
            style={{
              fontWeight: "500",
              paddingLeft: "40px",
            }}
          >
            PIS
          </div>
          <div>
            <button className="sharing-button">
              <FontAwesomeIcon icon={faShareNodes} />
            </button>
            <button className="sharing-button">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="sharing-button">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
