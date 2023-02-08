import React, { useState, useRef, useEffect } from 'react'
import Navbar from './navbar'
import { Link, Navigate } from "react-router-dom"
import { v4 as uuid } from "uuid";



const Signup = () => {
  const signemailRef = useRef(null);
  const signnameRef = useRef(null);
  const signpassRef = useRef(null);

  const [profiles, setProfiles] = useState([]);

  const addProfile= async(e)=>{
    e.preventDefault();
    setProfiles({id: uuid() ,name: signnameRef.current.value ,email:signemailRef.current.value, password:signpassRef.current.value})
    
    const response  =  await fetch('http://10.10.12.61:3000/user/create',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            name:signnameRef.current.value,
            email: signemailRef.current.value,
            password: signpassRef.current.value,
            // profile_url:signpassRef.current.value
        })
    })

    const data = await response.json();
    data.then.navigate("/profile")
    console.log(data);


  }



  return (
    <div>
      

      {/* <div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="text" placeholder='Enter email' ref={signemailRef} autoComplete="off" />
        </div>
        <button onClick={e => checkEmail(e)}>Signup </button><br />
        <a>OR</a><br />
        <button >Sign with google</button><br />
        <button >Sign with facebook</button><br />
        <button >Sign with apple</button><br />
        <a>Already have a account?<span><span>......</span><Link to="/login">Login</Link></span></a>
      </div> */}
      <div class='d-flex justify-content-center'>

        <div class='py-5'>
        <h1 className='py-5' style={{fontSize:"3em"}}>Create New Account</h1>
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" >Name</label>
              <input ref={signemailRef} type="email"  class="form-control" name='name' placeholder='Enter name' />

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" >Email address</label>
              <input ref={signnameRef} type="email"  class="form-control" name='email' placeholder='Enter email' />

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" >Password</label>
              <input ref={signpassRef} type="password" class="form-control" name='password' placeholder='Create a password' />

            </div>

            <button type="button" onClick={e => addProfile(e)} class="btn text-dark btn-primary btn-block mb-4 w-100"> <Link to="/profile">Login</Link></button>
            <button type="button" class="btn btn-light btn-block mb-4 w-100">Sign in with google</button>

            <div class="text-center">
              <p style={{ fontSize: "12px" }}>Donâ€™t have an account? <Link to="/profile">Login</Link></p>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signup