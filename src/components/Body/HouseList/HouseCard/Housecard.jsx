import "./Housecard.scss";
import Cardmodel from "../Cardmodel/Cardmodel";
import image1 from "../../../img/House1.png";
import image2 from "../../../img/House2.png";
import image3 from "../../../img/House3.png";
import image4 from "../../../img/House4.png";
import image5 from "../../../img/House5.png";
import image6 from "../../../img/House6.png";

export default function Housecard() {
  function waiting() {
    const button = document.querySelector(".waiting-button");
    if (button.classList.contains("hidden-waiting")) {
      button.classList.remove("hidden-waiting");
      button.classList.add("waiting");
    } else {
      button.classList.remove("waiting");
      button.classList.add("hidden-waiting");
    }
  }
  return (
    <>
      <div className="row">
        <div
          style={{
            width: "100%",
          }}
        >
          <div className="notForIpad">
            <div className="row">
              <div className="col-lg-4" style={{display: "flex", justifyContent: "flex-end"}}>
                <div>
                  <Cardmodel
                    link={`${image1}`}
                    name="PIS Eco Penthouse"
                    price="1,300"
                    picture="28"
                    descrip="Greeting from Place in Saigon, Place in Saigon Team would like to
                introduce this FABULOUS"
                    area="100"
                    distric="Distric 1"
                    tag="1"
                  ></Cardmodel>
                </div>
              </div>
              <div className="col-lg-4" style={{display: "flex", justifyContent: "center"}}>
                <div>
                  <Cardmodel
                    link={`${image2}`}
                    name="BRIGHT STUDIO APARTMENT IN DAKAO"
                    price="650"
                    picture="13"
                    descrip="✨ Bright Studio Apartment right in heart of downtown rented from Host. ▪️ Location: 95D Ng"
                    area="40"
                    distric="Distric 1"
                    tag="2"
                  ></Cardmodel>
                </div>
              </div>
              <div className="col-lg-4" style={{display: "flex", justifyContent: "flex-start"}}>
                <div>
                  <Cardmodel
                    link={`${image3}`}
                    name="Eco One Bedroom in Dakao"
                    price="600"
                    picture="21"
                    descrip="Designed & operated by Place in Saigon Team, One Bedroom Apartment at 95D Nguyen Van T"
                    area="60"
                    distric="Distric 1"
                    tag="2"
                  ></Cardmodel>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4" style={{display: "flex", justifyContent: "flex-end"}}>
                <Cardmodel
                  link={`${image4}`}
                  name="PIS – Stunning Studio Apartment In D3"
                  price="500"
                  picture="15"
                  descrip="Place In Saigon Apartment in District 3 is ready to welcome you!!! – Located on a ca"
                  area="35"
                  distric="Distric 3"
                  tag="1"
                ></Cardmodel>
              </div>
              <div className="col-lg-4" style={{display: "flex", justifyContent: "center"}}>
                <Cardmodel
                  link={`${image5}`}
                  name="PIS MINI APARTMENT IN D3"
                  price="450"
                  picture="14"
                  descrip="#servicedapartmentforrent Dear all, let us to introduce the other new renovated building f"
                  area="33"
                  distric="Distric 3"
                  tag="2"
                ></Cardmodel>
              </div>
              <div className="col-lg-4" style={{display: "flex", justifyContent: "flex-start"}} >
                <Cardmodel
                  link={`${image6}`}
                  name="PIS Stunning Studio in D1"
                  price="650"
                  picture="9"
                  descrip="Serviced studio for rent in Nguyen Van Thu, Dakao, District 1 which is known as the most v"
                  area="35"
                  distric="Distric 1"
                  tag="2"
                ></Cardmodel>
              </div>
            </div>
          </div>

          <div className="forIpad">
            <div className="row ">
              <div className="col-sm-6">
                <Cardmodel
                  link={`${image1}`}
                  name="PIS Eco Penthouse"
                  price="1,300"
                  picture="28"
                  descrip="Greeting from Place in Saigon, Place in Saigon Team would like to
                introduce this FABULOUS"
                  area="100"
                  distric="Distric 1"
                  tag="1"
                ></Cardmodel>
              </div>
              <div className="col-sm-6">
                <Cardmodel
                  link={`${image2}`}
                  name="BRIGHT STUDIO APARTMENT IN DAKAO"
                  price="650"
                  picture="13"
                  descrip="✨ Bright Studio Apartment right in heart of downtown rented from Host. ▪️ Location: 95D Ng"
                  area="40"
                  distric="Distric 1"
                  tag="2"
                ></Cardmodel>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <Cardmodel
                  link={`${image3}`}
                  name="Eco One Bedroom in Dakao"
                  price="600"
                  picture="21"
                  descrip="Designed & operated by Place in Saigon Team, One Bedroom Apartment at 95D Nguyen Van T"
                  area="60"
                  distric="Distric 1"
                  tag="2"
                ></Cardmodel>
              </div>

              <div className="col-sm-6">
                <Cardmodel
                  link={`${image4}`}
                  name="PIS – Stunning Studio Apartment In D3"
                  price="500"
                  picture="15"
                  descrip="Place In Saigon Apartment in District 3 is ready to welcome you!!! – Located on a ca"
                  area="35"
                  distric="Distric 3"
                  tag="1"
                ></Cardmodel>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <Cardmodel
                  link={`${image5}`}
                  name="PIS MINI APARTMENT IN D3"
                  price="450"
                  picture="14"
                  descrip="#servicedapartmentforrent Dear all, let us to introduce the other new renovated building f"
                  area="33"
                  distric="Distric 3"
                  tag="2"
                ></Cardmodel>
              </div>
              <div className="col-sm-6">
                <Cardmodel
                  link={`${image6}`}
                  name="PIS Stunning Studio in D1"
                  price="650"
                  picture="9"
                  descrip="Serviced studio for rent in Nguyen Van Thu, Dakao, District 1 which is known as the most v"
                  area="35"
                  distric="Distric 1"
                  tag="2"
                ></Cardmodel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden-waiting waiting-button">
        <div className="new_prelader"></div>
      </div>

      <div className="row">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "13px 0 45px",
          }}
          onClick={() => {
            waiting();
          }}
        >
          <button className="submit-btn-1" style={{ margin: 0 }}>
            Load More Listings
          </button>
        </div>
      </div>
    </>
  );
}
