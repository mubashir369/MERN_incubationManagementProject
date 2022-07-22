import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Sidebar.css";
import {  FaBars, FaThList } from "react-icons/fa";
import { AiOutlineLogout ,AiFillDashboard} from "react-icons/ai";
import {BsCardChecklist,BsUiChecksGrid} from 'react-icons/bs'
import {MdFreeCancellation} from 'react-icons/md'
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const adminLogout = (e) => {
    e.preventDefault();
    const conf = window.confirm("are you want to logout now");
    if (conf) {
      const token = localStorage.getItem("adminToken");
      if (token) {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
      }
    }
  };
  const menuItem = [
    {
      path: "/admin-dashboard",
      name: "Dashboard",
      icon: <AiFillDashboard/>,
    },
    {
      path: "/approved-forms",
      name: "RecordList",
      icon: <BsCardChecklist />,
    },
    {
      path: "/decline-forms",
      name: "DeclinedForms",
      icon: <MdFreeCancellation />,
    },
    {
      path: "/slot",
      name: "BookingSlot",
      icon: <BsUiChecksGrid />,
    },
  ];
  return (
    <div className="sidebarContainer">
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
          <div className="icon">
            <AiOutlineLogout />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            LogOut
          </div>
        </a>
      </div>

      <main>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              
                <a href="" onClick={adminLogout}>
                  Log Out{" "}<AiOutlineLogout />
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
