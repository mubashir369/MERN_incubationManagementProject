import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigator = useNavigate();
  const apply=(e)=>{
      e.preventDefault()
      navigator('/incubation-form')

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
    }
  });
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
          <button className="DashboardBtn" onClick={apply}>
            <span className="DashboardSpan"></span>Apply For incubation
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
