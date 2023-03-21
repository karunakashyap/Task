import React from 'react'

export default function Form() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <button className='col-3 login'>Login</button>
        <button className='col-3 signup'>Signup</button>
        
      </div>
    </div>
    <form className='form-data'>
      <input type='text' name='email' placeholder='Email Address' /><br></br><br></br>
      <input  type='password' name='password' placeholder='Password' /><br></br><br></br>
      <button className='login-button'>LOGIN</button>
       <p className='password'>Forgot Password?</p>
    </form>
    </>
  )
}
