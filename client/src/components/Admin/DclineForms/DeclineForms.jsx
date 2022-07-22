import React, { useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";
import axios from "axios";


function DeclineForms() {
    const [data,setData]=useState([])
 
  useEffect(() => {
    axios.get("http://localhost:9000/admin/allForms").then((res) => {
        const allForm = res.data.Forms;
        setData(allForm.filter((form)=>form.status==='decline'))
        
      });

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
          <h3>Declined ApplicationList</h3>
        </div>

        <div className="">
          <table id="example" class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Company Name</th>
                <th>State</th>
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
                      <button className="btn btn-danger"  >Remove</button>
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

export default DeclineForms;
