import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css";
import jwtDecode from "jwt-decode";
function UserLogin() {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios.post("http://localhost:9000/login", data).then((res) => {
      console.log(res.data);
      const Usertoken = res.data.token;
      
      if (Usertoken) {
        const user = jwtDecode(Usertoken);
        if (!user) {
          alert("this Password or email incorrect");
        } else {
          localStorage.setItem("userToken", Usertoken);
          alert("Login Success");
          navigator("/user-dashboard");
        }
      }else{
        alert("this Password or email incorrect");
      }
    });
  };
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      navigator("/user-dashboard");
    }
  }, []);
  return (
    <div className="body">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h1 className="heading">Login</h1>
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
            <Link className="underlineHover" to={"/sign-up"}>
              Sign Up
            </Link>
            <Link className="underlineHover" to={"/admin-login"}>
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
