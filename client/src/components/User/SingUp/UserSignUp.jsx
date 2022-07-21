import React,{useState} from 'react'
import '../Login/UserLogin.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
function UserSignUp() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const Register=(e)=>{
        e.preventDefault()
        const data={
            email:email,
            password:password,
            name:name
        }
        axios.post('http://localhost:9000/register',data)

    }
  return (
    <div className="body">
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h1 className="heading">Sign Up</h1>
        </div>
        <form onSubmit={Register}> 
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
            type="text"
            id="login"
            className="fadeIn second"
           required
            placeholder="Username"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
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
          <input type="submit" className="fadeIn fourth" value="Sign Up" />
        </form>
        <div id="formFooter">
          <Link className="underlineHover" to={'/login'}>
            Login
          </Link>
    
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserSignUp
