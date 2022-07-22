import React from "react";

function FormData(props) {
    const closeForm=()=>{
        props.setShow(false)
    }
  return (
    <div>
     
      <div className="border border-secondary rounded p-5">
      <button className="btn btn-dark" onClick={closeForm} >Back</button>
        <div className="pt-5 ">
          <h1 className="text-center">Incubation Form Data</h1>
          <div className="">
            <form>
              <div className="form-group">
                  <p className="ms-2" >Name:</p>
                <input
                  type="text"
                  className="form-control ms-4"
                  value={props.formData[0].name}
                  disabled
                />
              </div>
              <div className="form-group">
                  <p className="ms-2" >State:</p>
                <input
                  type="text"
                  className="form-control ms-4"
                  value={props.formData[0].state}
                  disabled
                />
              </div>
              <div className="form-group">
                  <p className="ms-2" >Email:</p>
                <input
                  type="text"
                  className="form-control ms-4"
                  value={props.formData[0].email}
                  disabled
                />
              </div>
              <div className="form-group">
                  <p className="ms-2" >Land Mark:</p>
                <input
                  type="text"
                  className="form-control ms-4"
                  value={props.formData[0].lMark}
                  disabled
                />
              </div>
              <div className="form-group">
                  <p className="ms-2" >Company Name:</p>
                <input
                  type="text"
                  className="form-control ms-4"
                  value={props.formData[0].Cname}
                  disabled
                />
              </div>
              <div className="form-group">
                  <p className="ms-2" >Team Background:</p>
                <input
                  type="text"
                  className="form-control ms-4"
                  value={props.formData[0].teamBg}
                  disabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormData;
