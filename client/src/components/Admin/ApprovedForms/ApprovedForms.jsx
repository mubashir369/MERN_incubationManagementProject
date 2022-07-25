import React, { useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { FcApproval, FcBiotech } from "react-icons/fc";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getForms } from "../../../Redux/forms/formSlice";

function ApprovedForms() {
  const dispatch = useDispatch();
  const { forms, loading, reject } = useSelector((state) => state.form);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/admin/allForms").then((res) => {
      const allForm = res.data.Forms;
      setData(allForm.filter((form) => form.status === "approved"));
    });
    console.log(forms);

    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);
  /*useEffect(()=>{
    dispatch(getForms())
     setData(forms.filter((form) => form.status === "approved"))
  },[])*/
  return (
    <div>
      <div className="MainDiv">
        <div class="jumbotron text-center">
          <h3>Record ApplicationList</h3>
        </div>

        <div className="">
          <table id="example" class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Company Name</th>
                <th>State</th>
                <th>Slot</th>
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
                      {result.slot === "Not" ? (
                        <Link to="/slot" className="btn btn-secondary">
                          Book Slot
                        </Link>
                      ) : (
                        result.slot
                      )}
                    </td>
                    <td>
                      {result.slot === "Not" ? (
                        <FcBiotech size="30px" />
                      ) : (
                        <FcApproval size="30px" />
                      )}
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

export default ApprovedForms;
