import "./NewAccount.scss";
import { LoginContext } from "../../../../utils/LoginContect";
import { useContext } from "react";

export default function NewAccount() {
  const type = useContext(LoginContext);

  return (
    <>
      <div className="row form-info-new">
        <p className="signIn-text" style={{ paddingBottom: "30px" }}>
          Create an account
        </p>
        <form action="#" style={{ display: "flex", flexWrap: "wrap" }}>
          <input className="input-box" type="text" placeholder="Username" />
          <input className="input-box" type="text" placeholder="Email" />
          <input className="input-box" type="password" placeholder="Password" />
          <input
            className="input-box"
            type="password"
            placeholder="Retype Password"
          />
          <select name="user-type" className="input-box" id="">
            <option value="">Select User Type</option>
            <option value="User">User</option>
            <option value="Agency">Agency</option>
            <option value="Developer">Developer</option>
          </select>
          <div
            style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}
          >
            <input type="checkbox" style={{ marginRight: "10px" }} />
            <h7>I agree with terms & conditions</h7>
          </div>

          <button className="submit-btn-1">
            Register
            
          </button>
        </form>
      </div>
      <div className="row other-option">
        <div
          className="col-lg-6 col-auto"
          onClick={() => {
            type.toggleType("login");
          }}
        >
          <a className="text-option">Back to login!</a>
        </div>
        <div className="col-lg-6 col-auto">
          <a
            className="text-option"
            onClick={() => {
              type.toggleType("reset");
            }}
          >
            Forgot password?
          </a>
        </div>
      </div>
    </>
  );
}
