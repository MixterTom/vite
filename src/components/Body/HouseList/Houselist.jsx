import "./Houselist.scss";
import Housecard from "./HouseCard/Housecard";

export default function Houselist() {


  return (
    <>
      <div style={{backgroundColor: "#FAFAFA"}}>
        <div
          className="row"
          style={{
            paddingTop: "53px",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              fontSize: "3rem"
            }}
          >
            OUR LATEST LISTINGS
          </h1>
        </div>

        <div
          className="row"
          style={{
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="row"
          >
            <button className="tax-control text-active col-sm-auto col-lg-1">Distric 1</button>
            <button className="tax-control text-active col-sm-auto col-lg-1">Distric 2</button>
            <button className="tax-control text-active col-sm-auto col-lg-1">Phu Nhuan</button>
            <button className="tax-control text-active col-sm-auto col-lg-1">Binh Thanh</button>
            <button className="tax-control text-active col-sm-auto col-lg-1">Distric 3</button>
          </div>
        </div>
      </div>

      <Housecard></Housecard>
    </>
  );
}
