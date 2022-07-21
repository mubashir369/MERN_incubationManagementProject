import React from "react";
import AdminDashboard from "../../components/Admin/AdminDashboard/AdminDashboard";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import PendingForms from "../../components/Admin/AdminDashboard/PendingForms";
function AdminDashboardPage() {
  return (
    <div>
      <Sidebar>
          
        
        <AdminDashboard />
        <br /> ,<br />
        <PendingForms />
      </Sidebar>
    </div>
  );
}

export default AdminDashboardPage;
