import "./Searchbar.scss";
import MultiRangeSlider from "../MultiSlider/MultiRangeSlider";

export default function Searchbar() {
  function handleChoose() {
    const button1 = document.querySelector(".btn-1");
    const button2 = document.querySelector(".btn-2");
    if (button1.classList.contains("active")) {
      button1.classList.remove("active");
      button2.classList.add("active");
    } else {
      button2.classList.remove("active");
      button1.classList.add("active");
    }
  }

  return (
    // <h1 style={{position: "absolute", top: "98%"}}>Hello</h1>
    <>
      <div className="notForPhone" style={{ position: "relative" }}>
        <div className="backgroundColor"></div>
        <div className="searchbar">
          <div className="row ">
            <div className="col-lg-3 switch-btn">
              <p className="button-change-mode btn-1" onClick={handleChoose}>
                Residental
              </p>
              <p
                className="button-change-mode btn-2 active"
                onClick={handleChoose}
              >
                Commercial{" "}
              </p>
            </div>
          </div>

          <div
            className="row"
            style={{
              marginTop: "16px",
            }}
          >
            <div className="col-lg-3">
              <select
                className="intput-filter"
                name=""
                id=""
                required
                style={{
                  padding: "3px 10px",
                  border: "none",
                  borderRadius: "2px",
                }}
              >
                <option value="" disabled selected hidden>
                  District
                </option>
                <option value="Distict1">Distict 1</option>
                <option value="Distict2">Distict 2</option>
                <option value="Distict3">Distict 3</option>
                <option value="Distict4">Distict 4</option>
                <option value="Distict5">Distict 5</option>
                <option value="Distict6">Distict 6</option>
                <option value="Distict7">Distict 7</option>
                <option value="Phu Nhuan">Phu Nhuan</option>
                <option value="Binh Thanh">Binh Thanh</option>
                <option value="Binh Chanh">Binh Chanh</option>
                <option value="Tan Binh">Tan Binh</option>
              </select>
            </div>
            <div className="col-lg-3">
              <select
                className="intput-filter"
                name=""
                id=""
                required
                style={{
                  padding: "3px 10px",
                  border: "none",
                  borderRadius: "2px",
                  borderBottom: "1px solid #fff",
                }}
              >
                <option value="" disabled selected hidden>
                  Min. Beds
                </option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
                <option value="6"> 6</option>
                <option value="7"> 7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="col-lg-3">
              <select
                className="intput-filter"
                name=""
                id=""
                style={{
                  padding: "3px 10px",
                  border: "none",
                  borderRadius: "2px",
                }}
              >
                <option value="" disabled selected hidden>
                  Min. Beds
                </option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
                <option value="6"> 6</option>
                <option value="7"> 7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                style={{
                  padding: "3px 10px",
                  width: "275px",
                  border: "none",
                  borderRadius: "2px",
                }}
                placeholder="Keyword"
              />
            </div>
          </div>

          <div className="row" style={{ paddingTop: "10px" }}>
            <div className="col-lg-3">
              <input
                type="text"
                style={{
                  padding: "3px 14px",
                  width: "265px",
                  border: "none",
                  borderRadius: "2px",
                }}
                placeholder="ID"
              />
            </div>

            <div className="col-lg-6">
              <MultiRangeSlider
                max={7000}
                min={300}
                onChange={({ min, max }) =>
                  console.log(`min: ${min}, max: ${max}`)
                }
              />
            </div>

            <div className="col-lg-3">
              <button className="submit-btn-1" style={{ margin: 0 }}>
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
