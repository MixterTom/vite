import { useContext } from "react";
import "./Login.scss";
import { ThemeContext } from "../../../utils/ThemeContext";
import { LoginContext } from "../../../utils/LoginContect";
import OldAccount from "./OldAccount/OldAccount";
import NewAccount from "./NewAccount/NewAccount";
import { ResetPassword } from "./Resetpassword/Resetpassword";
import image from '../img/Login.png'

export default function Login() {
  const theme = useContext(ThemeContext);
  const type = useContext(LoginContext);

  function checkLogin() {
    if(type.type == "login"){
      return(<OldAccount></OldAccount>)
    }
    if(type.type == "regis"){
      return(<NewAccount></NewAccount>)
    }
    if(type.type == "reset"){
      return(<ResetPassword></ResetPassword>)
    }
  }
  return (
    <>
      <div className="login-background">
        <div className="background-blur"></div>
        <div className="row form-login">
          <div className="col-lg-6 info-login" style={{backgroundImage: `url(${image})`}}>
            <div>
              <h1 className="text-login">Some Nice Welcome Message</h1>
            </div>
          </div>
          <div className="col-lg-6 fill-info">
            <div
              className="row close-icon"
              onClick={() => {
                theme.toggleTheme();
                type.toggleType("login");
              }}
            >
              <i className="bi bi-x-lg"></i>
            </div>

            {checkLogin()}

            
          </div>
        </div>
      </div>
    </>
  );
}
