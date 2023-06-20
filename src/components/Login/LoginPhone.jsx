import { useContext } from "react";
import "./Login.scss";
import { LoginContext } from "../../../utils/LoginContect";
import OldAccount from "./OldAccount/OldAccount";
import NewAccount from "./NewAccount/NewAccount";
import { ResetPassword } from "./Resetpassword/Resetpassword";

export default function LoginPhone() {
  const type = useContext(LoginContext);

  function checkLogin() {
    if (type.type == "login") {
      return <OldAccount></OldAccount>;
    }
    if (type.type == "regis") {
      return <NewAccount></NewAccount>;
    }
    if (type.type == "reset") {
      return <ResetPassword></ResetPassword>;
    }
  }
  return (
    <>
      <div
        className="row form-login"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#fff",
          position: "relative",
          zIndex:"1000"
        }}
      >
        {checkLogin()}
      </div>
    </>
  );
}
