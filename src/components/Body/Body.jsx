import "./bodyCss.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Body() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
  };
  var settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };
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
                Special overflow swimming pool with a panoramic view of the city
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
      <div className="BodyThird">
        <span>TESTIMONIALS</span>
        <div>
          <Slider className="bodySlickSlider" {...settings}>
            <div>
              <div className="bodySlider row">
                <div className="imagePeopleText col-lg-6">
                  <div className="imagecontains">
                    <div className="imagePeople1"></div>
                    <span
                      style={{ marginLeft: "20px" }}
                      className="text-info shadowBlue"
                    >
                      A family and home away from home. The Place In Saigon team
                      made us feel so welcome and we will greatly miss everyone
                      as well as our wonderful apartment.Definitely recommend
                      Place In Saigon to anyone. Thanks so much to Bryan and the
                      team for all of their hard work,continuous help and
                      support.Most of all thank you for the fun and happy
                      memories!! I hope to see you again soon!
                    </span>
                  </div>
                  <div className="imagePeopleName col-lg-6">Kristi Heiser,</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bodySlider row">
                <div className="imagePeopleText col-lg-6">
                  <div className="imagecontains">
                    <div className="imagePeople2 shadowBlue"></div>
                    <span
                      style={{ marginLeft: "20px" }}
                      className="text-info shadowBlue"
                    >
                      Place In Saigon has offered comfortable accommodations for
                      me, my friends, and colleagues. The listings they offer
                      are in great locations, provide a range of conveniences
                      and amenities, and are inclusive of modern furnishings and
                      stylish decor. Bryan and the staff are friendly, eager to
                      help, and very responsive to questions and requests.
                    </span>
                  </div>
                  <div className="imagePeopleName col-lg-6">Tony Nguyen ,</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bodySlider row">
                <div className="imagePeopleText col-lg-6">
                  <div className="imagecontains">
                    <div className="imagePeople3 shadowBlue"></div>
                    <span
                      style={{ marginLeft: "20px" }}
                      className="text-info shadowBlue"
                    >
                      Had a great experience with Place in Saigon! They were
                      super helpful in finding me exactly what I wanted and made
                      the process extremely pleasant. Special thanks to Thuy and
                      Cindy for your hard work and diligence. I will 100% be
                      using your service again in July!
                    </span>
                  </div>
                  <div className="imagePeopleName col-lg-6">Mike Swiggy ,</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bodySlider row">
                <div className="imagePeopleText4 col-lg-6">
                  <div className="imagecontains">
                    <div className="imagePeople4 shadowBlue"></div>
                    <span
                      style={{ marginLeft: "20px" }}
                      className="text-info shadowBlue"
                    >
                      Always a lot of negative reviews of companies in Saigon,
                      so thought I would share my positive experience with Bryan
                      and his company Place in Saigon. Could not have wished for
                      a better agent to find me a new home. Bryan drove me
                      around HCMC to see properties at his own expense, without
                      notice and even when he had other urgent issues to attend
                      to. Called him on his day off and even met me onsite to
                      finalize. He has delivered nothing but exceptional
                      service. If u are looking to buy or rent a home in HCMC I
                      could not recommend anyone more.
                    </span>
                  </div>
                  <div className="imagePeopleName col-lg-6">Brett Fawell,</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bodySlider row">
                <div className="imagePeopleText col-lg-6">
                  <div className="imagecontains">
                    <div className="imagePeople5 shadowBlue"></div>
                    <span
                      style={{ marginLeft: "20px" }}
                      className="text-info shadowBlue"
                    >
                      Place in Saigon was a really great company to work with,
                      they were efficient and helpful. Bryan always responded
                      quickly to any questions or issues, and sorted any
                      problems out fast. It was a pleasure renting from them!
                    </span>
                  </div>
                  <div className="imagePeopleName5 col-lg-6">
                    Natalie Florence Hellyar,
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="BodyFourth">
        <span>OUR LATEST BLOGS</span>
        <div className="bodyFourthco row">
          <Slider {...settings2}>
            <div className="bodyFourthPost shadowBlue">
              <div className="bodyFourthImg"></div>
              <div className="bodyFourthBlog">
                The combination of charity and trekking R...
              </div>
              <div className="bodyFourthDate">Dec 28, 2017</div>
              <div className="bodyFourthDes">
                Christmas – Stay Warm! (15-17 Dec, 2017)
              </div>
              <div className="readmore">
                Continue reading
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
            <div className="bodyFourthPost shadowBlue">
              <div className="bodyFourthImg2"></div>
              <div className="bodyFourthBlog">
                Christmas, Stay Warm – Saigon Charity ...
              </div>
              <div className="bodyFourthDate">Nov 30, 2017</div>
              <div className="bodyFourthDes">
                For some people, charity is about giving. But for the likes of
                you, it is a way of living. It has been 4 years sinc ...
              </div>
              <div className="readmore2">
                Continue reading
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
            <div className="bodyFourthPost shadowBlue">
              <div className="bodyFourthImg3"></div>
              <div className="bodyFourthBlog">
                Place In Saigon Café – Place In Saigon...
              </div>
              <div className="bodyFourthDate">Nov 24, 2017</div>
              <div className="bodyFourthDes">
                We guarantee our best things in our best efforts. Here’s Place
                In Saigon building from the ground. There is a ...
              </div>
              <div className="readmore3">
                Continue reading
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
            <div className="bodyFourthPost shadowBlue">
              <div className="bodyFourthImg4"></div>
              <div className="bodyFourthBlog">
                Saigon Charity Tour – Full Moon Dream ...
              </div>
              <div className="bodyFourthDate">Nov 21, 2017</div>
              <div className="bodyFourthDes">Rach Ong charity house</div>
              <div className="readmore4">
                Continue reading
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
            <div className="bodyFourthPost shadowBlue">
              <div className="bodyFourthImg5"></div>
              <div className="bodyFourthBlog">
                Tet Trung Thu (Mid-Autumn Festival) in Vietn...
              </div>
              <div className="bodyFourthDate">Oct 04, 2017</div>
              <div className="bodyFourthDes">
                Tet Trung Thu, as it is known in Vietnam, or the Mid- Autumn
                Moon Festival as we refer to it in America, is a wonder ...
              </div>
              <div className="readmore5">
                Continue reading
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
            <div className="bodyFourthPost shadowBlue">
              <div className="bodyFourthImg6"></div>
              <div className="bodyFourthBlog">
                Saigon Charity in Ben Tre 2017...
              </div>
              <div className="bodyFourthDate">Sep 20, 2017</div>
              <div className="bodyFourthDes">Full Moon Dream</div>
              <div className="readmore">
                Continue reading
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="bodyFifth">
        <span>
          We would like to thank our partners for all of their support
        </span>
        <div className="bodyFifthco">
          <Slider className="bodyFifthSlider" {...settings2}>
            <div className="bodyFifthImage1"></div>
            <div className="bodyFifthImage2"></div>
            <div className="bodyFifthImage3"></div>
            <div className="bodyFifthImage4"></div>
            <div className="bodyFifthImage5"></div>
            <div className="bodyFifthImage6"></div>
            <div className="bodyFifthImage7"></div>
            <div className="bodyFifthImage8"></div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Body;
