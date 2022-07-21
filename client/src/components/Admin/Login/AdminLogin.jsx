import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../User/Login/UserLogin.css";

function AdminLogin() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault()
    const data={
      email:email,
      password:password
    }
    axios.post("http://localhost:9000/admin/login",data).then((res)=>{
      console.log(res.data);
      if(res.data.admin){
        alert("login Success")
        localStorage.setItem('adminToken',res.data.token)
        navigate('/admin-dashboard')
      }else{
        alert('invalid userName or Password')
      }
    })
  };
  useEffect(()=>{
    const token=localStorage.getItem('adminToken')
    if(token){
//      navigate('/admin-dashboard')
    }
  
  },[])
  return (
    <div className="body">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h1 className="heading">Admin Login</h1>
          </div>
          <form onSubmit={login}>
            <input
              type="email"
              id="login"
              className="fadeIn second"
              required
              placeholder="Email ID"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              placeholder="password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="formFooter">
            <Link className="underlineHover" to={"/login"}>
              User Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
