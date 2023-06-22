import "./NewAccount.scss";
import { LoginContext } from "../../../../utils/LoginContect";
import { useContext, useState } from "react";
import axios from 'axios';

export default function NewAccount() {
  const type1 = useContext(LoginContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUserName] = useState("");
  const [type,setType] = useState("");

  function Register(e){ 
    console.log(email,password,username,type);
    e.preventDefault();
   try{
       axios.post(`http://192.168.1.35:3000/users/register`,{email,password,username,type})
   }
   catch(error){
    console.log(error);
   }
}
  return (
    <>
      <div className="row form-info-new">
        <p className="signIn-text" style={{ paddingBottom: "30px" }}>
          Create an account
        </p>
        <form onSubmit={(e)=>{Register(e)}} action="#" style={{ display: "flex", flexWrap: "wrap" }}>
          <input onChange={(e)=>{setUserName(e.target.value)}} className="input-box" type="text" placeholder="Username" />
          <input onChange={(e)=>{setEmail(e.target.value)}} className="input-box" type="email" placeholder="Email" />
          <input onChange={(e)=>{setPassword(e.target.value)}} className="input-box" type="password" placeholder="Password" />
          <input
            className="input-box"
            type="password"
            placeholder="Retype Password"
          />
          <select name="user-type" className="input-box" id="" onChange={(e)=>{setType(e.target.value)}}>
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
            type1.toggleType("login");
          }}
        >
          <a className="text-option">Back to login!</a>
        </div>
        <div className="col-lg-6 col-auto">
          <a
            className="text-option"
            onClick={() => {
              type1.toggleType("reset");
            }}
          >
            Forgot password?
          </a>
        </div>
      </div>
    </>
  );
}
