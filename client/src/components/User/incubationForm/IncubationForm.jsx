import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function IncubationForm() {
  return (
    <div className="border border-secondary rounded">
      <div className="pt-5 ">
        <h1 className="text-center">Incubation Form</h1>
        
        <div className="container">
          <form>
            <div className="d-flex">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  required
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  required
                />{" "}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email ID"
                  required
                />{" "}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Land Mark"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="COMPANY NAME"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Describe Your Team and Background"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Describe Your Company and Products"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Describe the problem you are trying to solve"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="What is unique about your solution"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="what is your value proposition for the customer ?"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Explain your revenue model"
                required
              />
            </div>
            <h5>Types of incubation needed:</h5>
            <br />
            <div className="d-flex">
              <div className="form-group d-flex">
                <input
                  type="radio"
                  name="type"
                  id=""
                  value="Physical Incubation"
                  required
                />
                <p>&nbsp;Physical Incubation</p>
              </div>
              <div className="form-group d-flex ms-5">
                <input
                  type="radio"
                  name="type"
                  id=""
                  value="Virtual Incubation"
                  required
                />
                <p>&nbsp; Virtual Incubation</p>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Upload a detailed business proposal"
                required
              />
            </div>
            <div className="form-group text-center d-flex justify-content-between  pt-3 pb-5">
              <button className="btn btn-danger ">Cancel</button>
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IncubationForm;
