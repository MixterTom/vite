import "./OldAccount.scss";
import { LoginContext } from "../../../../utils/LoginContect";
import { useContext } from "react";
export default function OldAccount() {
    const type = useContext(LoginContext);

  return (
    <>
      <div className="row form-info">
        <p className="signIn-text" style={{ paddingBottom: "30px" }}>
          Sign into your account
        </p>
        <form action="#" style={{ display: "flex", flexWrap: "wrap" }}>
          <input className="input-box" type="text" placeholder="Username" />
          <input className="input-box" type="text" placeholder="Password" />
          <button className="submit-btn-1">
            Login
          </button>
        </form>
      </div>
      <div className="row other-option">
        <div className="col-lg-6 col-auto " onClick={() => {type.toggleType('regis')}}>
          <a className="text-option">Register here!</a>
        </div>
        <div className="col-lg-6 col-auto">
          <a className="text-option" onClick={() => {type.toggleType('reset')}}>Forgot password?</a>
        </div>
      </div>
    </>
  );
}
