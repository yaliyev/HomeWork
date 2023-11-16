import React from 'react'

const Login = () => {
  return (
   
        <div className="login-box border my-3 p-3">
          <h3 className=' text-center mb-4'>Login Form</h3>
          <div class="form-group  p-2">
            <label className='form-label w-100 text-start' for="login-username">Username:</label>
            <input autoComplete='off' type="text" className="form-control" id="login-username" placeholder="Type username" />
          </div>
          <div class="form-group  p-2">
            <label className='form-label w-100 text-start' for="login-password">Password:</label>
            <input autoComplete='off' type="password" className="form-control" id="login-password" placeholder="Type password" />
          </div>
          <div className="form-group p-2 d-flex justify-content-center ">
          <button className='btn btn-success'>Login</button>
          </div>
         
        </div>
      

  )
}

export default Login