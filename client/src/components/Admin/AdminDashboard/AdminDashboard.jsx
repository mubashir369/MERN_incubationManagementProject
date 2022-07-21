import React, { useEffect, useState } from 'react'
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import $ from 'jquery'; 
 
//For API Requests
import axios from 'axios';

function AdminDashboard() {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:9000/admin/allForms").then((res)=>{
        
        const newForm= res.data.Forms.filter((form)=>form.status==='new')
        setData(newForm)
        console.log('pending',newForm);
    })
    $(document).ready(function () {
      setTimeout(function(){
      $('#example').DataTable();
       } ,1000);
  });
  },[])

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
          {data.map((result,index) => {
            return (
              
                 <tr>
                  <td>{index+1}</td>
                  <td>{result.Cname}</td>
                  <td>{result.state}</td>
                  <td><button className='btn btn-primary' >Open</button></td>
                  <td><button className='btn btn-secondary' >Pending</button></td>
                </tr>
              
            )
          })}
            
             
          </tbody>
        </table>
           
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard