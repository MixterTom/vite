import "./bodyCss.scss";
function Body() {
  return (
    <>
    
      <div className="bodyHead row">
        <div className="Head col-lg-6">
          <div className="bodyHeadName">Be your family members in Saigon</div>
          <div className="bodyHeadNameSub">
            We put our heart, mind, and soul into even the smallest things…
          </div>
        </div>
        <div className="Circle col-lg-6 ">
          <div>
            <i className="bi bi-car-front"></i>
          </div>
          <div>
            <i className="bi bi-bicycle"></i>
          </div>
          <div>
            <i className="bi bi-image"></i>
          </div>
          <div>
            <i className="bi bi-people-fill"></i>
          </div>
          <div>
            <i className="bi bi-file-earmark-medical"></i>
          </div>
          <div>
            <i className="bi bi-heart"></i>
          </div>
          <div>
            <i className="bi bi-cup"></i>
          </div>
        </div>
        <div className="BodySecond">
          <span>Best Places in Saigon</span>
          <div className="BodyImage">
            <div className="BodyImage1 col-lg-4">
              <div className="BodyImage11">
              <div className="blurBackgroud"></div>
                <p style={{ width: "100%" }}>Price Residence </p>
                <p className="namesmall1 hideNow">
                  Connected to the high-end utilities of central HCM City area
                </p>
              </div>
              <div className="BodyImage12">
              <div className="blurBackgroud"></div>
                <p style={{ width: "100%" }}>Icon 56 </p>
                <p className="namesmall2 hideNow">
                  Special overflow swimming pool with a panoramic view of the
                  city
                </p>
              </div>
            </div>
            <div className="BodyImage2 col-lg-4">
              <div className="BodyImage13">
              <div className="blurBackgroud"></div>
                <div className="BodyImageSquare">
                  <div style={{ position: "absolute", top: "16%", right: "15%" }}>
                    <p>Vinhomes Central Park</p>
                    <p className="namesmall3 hideNow">
                      Combines the nature and a fiver-start city life style
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="BodyImage1 col-lg-4">
              <div className="BodyImage14">
              <div className="blurBackgroud"></div>
                <p style={{ width: "100%" }}>Vinhomes Golden River</p>
                <p className="namesmall4 hideNow">
                  ``COMING SOON! The project is at the very last step
                </p>
              </div>
              <div className="BodyImage15">
              <div className="blurBackgroud"></div>
                <p style={{ width: "100%" }}>Masteri Thao Dien</p>
                <p className="namesmall5 hideNow">
                  A New brand in the luxury apartment market in district 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Body;
