import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigator = useNavigate();
  const [form,setForm]=useState(false)
  const [status,setStatus]=useState('')
  const apply=(e)=>{
      e.preventDefault()
      navigator('/incubation-form')

  }
  const checkForm=(user)=>{
    axios.get(`http://localhost:9000/find-form/${user.id}`).then((data)=>{
      console.log(data.data);
      if(data.data.formData){
        setForm(true)
        setStatus(data.data.formData.status)
      }
    })
  }
  const userLogout = (e) => {
    e.preventDefault();
    const con = window.confirm("are you want to logOut now");
    if (con) {
      const token = localStorage.getItem("userToken");
      if (token) {
        localStorage.removeItem("userToken");
        navigator("/login");
      }
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigator("/login");
     
    }else{
      const user=jwtDecode(token)
      if(user){
        checkForm(user)
      }

    }
  },[]);
  return (
    <div class="DashboardBanner">
      <div className="DashboardNavbar">
        <div></div>

        <ul>
          <li className="logout">
            <a href="" onClick={userLogout}>
              Log Out
            </a>
          </li>
          
        </ul>
      </div>
      <div class="Dashboardcontent">
        <h1>Welcome</h1>

        <div>
         { form ? <div>
          <h3>Form Already Submitted</h3><br />
          <h4 > <span style={{color:'#e3820b'}} >Status</span> : {status}</h4>
         </div> : <button className="DashboardBtn" onClick={apply}>
            <span className="DashboardSpan"></span>Apply For incubation
          </button>}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
