import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
    const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const adminLogout = (e) => {
    e.preventDefault();
    const conf = window.confirm("are you want to logout now");
    if (conf) {
      const token = localStorage.getItem("adminToken");
      if (token) {
        localStorage.removeItem("adminToken");
        navigate('/admin-login')
      }
    }
  };
  const menuItem = [
    {
      path: "/admin-dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/approved-forms",
      name: "Record List",
      icon: <FaThList />,
    },
    {
      path: "/decline-forms",
      name: "Declined Forms",
      icon: <FaThList />,
    },
   
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Admin
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <a className="link" onClick={adminLogout} activeclassName="active">
          <div className="icon"></div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            LogOut
          </div>
        </a>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
