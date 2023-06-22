import "./OldAccount.scss";
import { LoginContext } from "../../../../utils/LoginContect";
import { useContext } from "react";
import axios from 'axios';
import { useState } from "react";


export default function OldAccount() {
    const type = useContext(LoginContext);
    const [password,setPassword] = useState("");
    const [username,setUserName] = useState("");
    const [data,setData] = useState("");
    function Login(e){
      e.preventDefault();
      try{
        axios.post(`http://192.168.1.35:3000/users/login`,{username,password})
        .then(res=>{
          setData(res.data);
          console.log(data);
        })
      }
      catch(error){
        console.log(error);
      }
  }

  function showLog(){
    if(data.status == true){
      return(
        <div style={{backgroundColor: "green", width:"70%",paddingBottom:"1px",marginLeft:"12px"}}>{data.data}</div>
      )
    }else{
      return(
        <div style={{backgroundColor:"red", width:"70%",paddingBottom:"1px",marginLeft:"12px"}}>{data.data}</div>
      )
    }
  }

   


  return (
    <>
      <div className="row form-info">
        <p className="signIn-text" style={{ paddingBottom: "30px" }}>
          Sign into your account
        </p>
        {
          showLog()
        }
        <form onSubmit={(e)=>{Login(e)}} action="#" style={{ display: "flex", flexWrap: "wrap" }}>
          <input onChange={(e)=>{setUserName(e.target.value); setData("")}} className="input-box" type="text" placeholder="Username" />
          <input onChange={(e)=>{setPassword(e.target.value)}} className="input-box" type="text" placeholder="Password" />
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
