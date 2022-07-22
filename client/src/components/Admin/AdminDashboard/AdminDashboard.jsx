import React, { useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";

//For API Requests
import axios from "axios";

function AdminDashboard(props) {
  const [data, setData] = useState([]);
  const pending = async (e, id) => {
    e.preventDefault();
    setData(data.filter((form) => form._id !== id));
    const change = {
      id: id,
      status: "pending",
    };

    props.setStatus(!props.status);
    await axios.post(`http://localhost:9000/admin/change-status`, change);
  };
  const openForm = (e, id) => {
    e.preventDefault();
    props.setShow(true)
    props.setFormData(data.filter((form)=>form._id===id))
    console.log("fdata",data.filter((form)=>form._id===id));
    axios.get(`http://localhost:9000/admin/getForm/${id}`).then((result) => {
      console.log(result.data.Form);
    });
  };

  useEffect(() => {
    setData(props.forms.filter((form) => form.status === "new"));

    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);
  useEffect(() => {
    setData(props.forms.filter((form) => form.status === "new"));
  }, [props]);

  return (
    <div>
      <div className="MainDiv">
        <div class="jumbotron text-center">
          <h3>NewApplicationList</h3>
        </div>

        <div className="">
          <table id="example" class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Company Name</th>
                <th>State</th>
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
                        className="btn btn-primary"
                        onClick={(e) => openForm(e, result._id)}
                      >
                        Open
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        onClick={(e) => pending(e, result._id)}
                      >
                        Pending
                      </button>
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

export default AdminDashboard;
