import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
import './UserLogin.css'

function UserLogin() {
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const login=()=>{

    }
  return (
    <div className="body">
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h1 className="heading">Login</h1>
        </div>
        <form onSubmit={login}> 
          <input
            type="email"
            id="login"
            className="fadeIn second"
           required
            placeholder="Email ID"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
          
            placeholder="password"
            value={password}
            required
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <div id="formFooter">
          <Link className="underlineHover" to={'/sign-up'}>
            Sign Up
          </Link>
          <Link className="underlineHover" to={'/admin-login'}>Admin Login</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserLogin
