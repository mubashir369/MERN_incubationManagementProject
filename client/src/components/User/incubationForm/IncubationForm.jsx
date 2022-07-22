import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import './IncubationForm.css'

function IncubationForm() {
    const navigate=useNavigate()
    const [form,setForm]=useState({})
    const cancel=(e)=>{
        e.preventDefault()
        navigate('/user-dashboard')
    }
    const apply=(e)=>{
        e.preventDefault()
        console.log("button Clicked");
        const token=localStorage.getItem('userToken')
        console.log(token);
        if(token){
            const user=jwtDecode(token)
            console.log(user);
           
            axios.post(`http://localhost:9000/apply-form/${user.id}`,form).then((res)=>{
          if(res.data.status==="ok"){
            alert('form Submitted')
            navigate('/user-dashboard')
          }else{
            alert('please try again later')
            navigate('/user-dashboard')
          }
            })
        }

        
    }
    useEffect(()=>{
        const token=localStorage.getItem('userToken')
        if(!token){
            navigate('/login')
        }
    },[])
  return (
    <div className="border border-secondary rounded">
      <div className=" maindiv ">
        <h1 className="text-center">Incubation Form</h1>
        
        <div className="formDiv ms-5">
          <form onSubmit={apply} className="">
            <div className="d-flex">
              <div className="form-group m-2 fw" >
                 
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  required
                  value={form.name}
                  onChange={((e)=>setForm({...form, name:e.target.value}))}
                />
              </div>
              <div className="form-group m-2 fw">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  required
                  value={form.phone}
                  onChange={((e)=>setForm({...form, phone:e.target.value}))}
                />
              </div>
              <div className="form-group m-2 fw">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  required
                  value={form.state}
                  onChange={((e)=>setForm({...form, state:e.target.value}))}
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="form-group m-2 fw">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  required
                  value={form.city}
                  onChange={((e)=>setForm({...form, city:e.target.value}))}
                />{" "}
              </div>
              <div className="form-group m-2 fw">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email ID"
                  required
                  value={form.email}
                  onChange={((e)=>setForm({...form, email:e.target.value}))}
                />{" "}
              </div>
              <div className="form-group m-2 fw">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Land Mark"
                  required
                  value={form.lMark}
                  onChange={((e)=>setForm({...form, lMark:e.target.value}))}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="COMPANY NAME"
                required
                value={form.Cname}
                  onChange={((e)=>setForm({...form, Cname:e.target.value}))}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Describe Your Team and Background"
                required
                value={form.teamBg}
                  onChange={((e)=>setForm({...form, teamBg:e.target.value}))}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Describe Your Company and Products"
                required
                value={form.products}
                  onChange={((e)=>setForm({...form, products:e.target.value}))}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Describe the problem you are trying to solve"
                required
                value={form.solve}
                  onChange={((e)=>setForm({...form, solve:e.target.value}))}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="What is unique about your solution"
                required
                value={form.solution}
                  onChange={((e)=>setForm({...form, solution:e.target.value}))}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="what is your value proposition for the customer ?"
                required
                value={form.proposition}
                  onChange={((e)=>setForm({...form, proposition:e.target.value}))}
                
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Explain your revenue model"
                required
                value={form.revenue}
                  onChange={((e)=>setForm({...form, revenue:e.target.value}))}
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

                  onChange={((e)=>setForm({...form, type:e.target.value}))}
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
                  
                  onChange={((e)=>setForm({...form, type:e.target.value}))}
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
                value={form.busProp}
                  onChange={((e)=>setForm({...form, busProp:e.target.value}))}
              />
            </div>
            <div className="form-group text-center d-flex justify-content-between  pt-3 pb-5">
              <button className="btn btn-danger " onClick={cancel} >Cancel</button>
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
