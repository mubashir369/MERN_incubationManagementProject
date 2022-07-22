import React, { useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";
import axios from "axios";

function PendingForms(props) {
  const [data, setData] = useState([]);
  const openForm = (e, id) => {
    e.preventDefault();
    props.setShow(true)
    props.setFormData(data.filter((form)=>form._id===id))
   
    // axios.get(`http://localhost:9000/admin/getForm/${id}`).then((result) => {
    //   console.log(result.data.Form);
    // });
  };
  const approve=(e,id)=>{
    e.preventDefault()
    setData(data.filter((form) => form._id !== id));
    const change = {
      id: id,
      status: "Approved",
    };
    await axios.post(`http://localhost:9000/admin/change-status`, change);  
  }
  const decline = async (e, id) => {
    e.preventDefault();
    setData(data.filter((form) => form._id !== id));
    const change = {
      id: id,
      status: "decline",
    };
    await axios.post(`http://localhost:9000/admin/change-status`, change);
  };

  useEffect(() => {
    setData(props.forms.filter((form) => form.status === "pending"));

    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);
  useEffect(() => {
    setData(props.forms.filter((form) => form.status === "pending"));
  }, [props]);

  return (
    <div>
      <div className="MainDiv">
        <div class="jumbotron text-center">
          <h3>Pending ApplicationList</h3>
        </div>

        <div className="container">
          <table id="example" class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Company Name</th>
                <th>State</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((result, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{result.Cname}</td>
                    <td>{result.state}</td>
                    <td>
                      <button
                        className="btn btn-dark"
                        onClick={(e) => openForm(e, result._id)}
                      >
                        Open
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-success" onClick={(e)=>approve(e,result._id)} >Approve</button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={(e)=>decline(e,result._id)} >Decline</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PendingForms;
