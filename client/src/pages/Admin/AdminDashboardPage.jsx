import React, { useEffect, useState } from "react";
import AdminDashboard from "../../components/Admin/AdminDashboard/AdminDashboard";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import PendingForms from "../../components/Admin/AdminDashboard/PendingForms";
import axios from "axios";
import FormData from "../../components/Admin/AdminDashboard/FormData";

function AdminDashboardPage() {
  
  const [allForms, setAllforms] = useState([]);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState([]);
  
  useEffect(() => {
   

    axios.get("http://localhost:9000/admin/allForms").then((res) => {
      const allForm = res.data.Forms;
      setAllforms(allForm);
    });
  }, []);
  useEffect(() => {
    
   axios.get("http://localhost:9000/admin/allForms").then((res) => {
      const allForm = res.data.Forms;
      setAllforms(allForm);
    });
  }, [status]);
  return (
    <div>
      <Sidebar show={show} setShow={setShow}>
        {show ? (
          <FormData
            show={show}
            setShow={setShow}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <div>
            <AdminDashboard
              forms={allForms}
              setAllforms={setAllforms}
              status={status}
              setStatus={setStatus}
              show={show}
              setShow={setShow}
              formData={formData}
              setFormData={setFormData}
            />
            <br /> ,<br />
            <PendingForms
              forms={allForms}
              setAllforms={setAllforms}
              status={status}
              setStatus={setStatus}
              show={show}
              setShow={setShow}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        )}
      </Sidebar>
    </div>
  );
}

export default AdminDashboardPage;
