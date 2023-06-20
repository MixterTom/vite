import { LoginContext } from "../../../../utils/LoginContect";
import { useContext } from "react";
export function ResetPassword() {
  const type = useContext(LoginContext);

  return (
    <>
      <div className="row form-info">
        <p className="signIn-text" style={{ paddingBottom: "30px" }}>
          Reset Password
        </p>
        <form action="#" style={{ display: "flex", flexWrap: "wrap" }}>
          <input
            className="input-box"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <button className="submit-btn-1">
            Reset Password
          </button>
        </form>
      </div>
      <div className="row other-option">
        <div
          className="col-lg-6 "
          onClick={() => {
            type.toggleType("login");
          }}
        >
          <a className="text-option">Back to login</a>
        </div>
      </div>
    </>
  );
}
