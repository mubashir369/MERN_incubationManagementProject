import React, { useEffect, useState } from "react";
import AdminDashboard from "../../components/Admin/AdminDashboard/AdminDashboard";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import PendingForms from "../../components/Admin/AdminDashboard/PendingForms";
import axios from "axios";
function AdminDashboardPage() {
  const [allForms,setAllforms]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:9000/admin/allForms").then((res) => {
      const allForm = res.data.Forms 
      setAllforms(allForm)
    });
  },[])
  useEffect(()=>{
    axios.get("http://localhost:9000/admin/allForms").then((res) => {
      const allForm = res.data.Forms 
      setAllforms(allForm)
    });

  },[allForms])
  return (
    <div>
      <Sidebar> 
        <AdminDashboard forms={allForms} setAllforms={setAllforms} />
        <br /> ,<br />
        <PendingForms forms={allForms} setAllforms={setAllforms}  />
      </Sidebar>
    </div>
  );
}

export default AdminDashboardPage;
