import React from 'react'
import { useRef } from 'react'
const Login = () => {
  return (
   
        <div className="login-box border my-3 p-3">
          <h3 className=' text-center mb-4'>Login Form</h3>
          <div className="form-group  p-2">
            <label className='form-label w-100 text-start' >Username:</label>
            <input autoComplete='off' type="text" className="form-control" id="login-username" placeholder="Type username" />
          </div>
          <div className="form-group  p-2">
            <label className='form-label w-100 text-start' >Password:</label>
            <input autoComplete='off' type="password" className="form-control" id="login-password" placeholder="Type password" />
          </div>
          <div className="form-group p-2 d-flex justify-content-center ">
          <button className='btn btn-success'>Login</button>
          </div>
         
        </div>
      

  )
}

export default Login