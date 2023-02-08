import React, {useState , useRef} from 'react'
import Navbar from './navbar'
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom"



const Login = () => {
  const [emails,setEmails]=useState([]);
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const addEmail=(e)=>{
    // e.preventDefault();
    setEmails(prev=> [{id: uuid() ,email:emailRef.current.value, password:passwordRef.current.value}])
    console.log(emails);
  }
  return (
    <div>
       
        
        {/* <h1>Login into your account</h1>
        <div >
          <div>
            <label htmlFor='email'>Email</label>
            <input type="text" placeholder='Enter email' ref={emailRef} autoComplete="off" />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type="text" placeholder='Enter password' ref={passwordRef} autoComplete="off"/>
          </div>
          <button onClick={e=>addEmail(e)}>Login </button><br/>
          <input type="checkbox" />
          <label>Remember for 30 days</label>
          <span>........</span>
          <a href='#' >Forgot password</a><br/>
          <button >Sign with google</button><br/>
          <a>Dont have a account?<span><span>......</span><Link to="/signup">signup</Link></span></a>
        </div> */}
        <div class='d-flex justify-content-center '>
        
<div class='py-5'>
<h1 className='py-5' style={{fontSize:"3em"}}>Log in to your account</h1>
  <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <label class="form-label" >Email address</label>
    <input type="email" ref={emailRef} class="form-control" placeholder='Enter email'/>
    
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <label class="form-label" >Password</label>
    <input type="password" ref={passwordRef} class="form-control" placeholder='*********'/>
    
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <p class="form-check-label" style={{fontSize: "14px"}}> Remember me</p>
      </div>
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      <a href="#!" style={{fontSize: "14px"}}>Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" onClick={e=>addEmail(e)} class="btn btn-primary btn-block text-dark mb-4 w-100"> <Link to="/profile">Login</Link></button>
  <button type="button" class="btn btn-light btn-block mb-4 w-100">Sign in with google</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p style={{fontSize: "12px"}}>Don't have an account? <Link to="/signup">signup</Link></p>
  </div>
</form>
</div>
</div>
    </div>
  )
}

export default Login