import React, { useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";
import axios from "axios";

function PendingForms() {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:9000/admin/allForms").then((res)=>{
          const pending=res.data.Forms.filter((form)=>form.status==='pending')
          setData(pending)
      })
   
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);

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
              {data.map((result,index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{result.Cname}</td>
                    <td>{result.state}</td>
                    <td>
                      <button className="btn btn-dark">Open</button>
                    </td>
                    <td>
                      <button className="btn btn-success">Approve</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Decline</button>
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
