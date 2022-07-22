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
  const pending=async(e,id)=>{
    e.preventDefault()
      setData(data.filter((form)=>form._id!==id))
      const change={
          id:id,
          status:'pending'
      }
       axios.post(`http://localhost:9000/admin/change-status`,change).then(()=>{
        props.setAllForms(props.forms.map((form)=>{
          if(form._id===id){
            return{...form,status:'pending'}
          }
          return form
        }))

       })

  }

  useEffect(() => {
  
    setData(props.forms.filter((form)=>form.status==='new'))
    
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);
  useEffect(()=>{
    setData(props.forms.filter((form)=>form.status==='new'))
  },[props])

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
                      <button className="btn btn-primary">Open</button>
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        onClick={(e) => pending(e,result._id)}
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
