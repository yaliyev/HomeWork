import React from 'react'

const Register = () => {
  return (
      <div className="register-box my-3 border p-3">
        <h3 className=' text-center mb-4'>Register Form</h3>
        <div class="form-group  p-2">
          <label className='form-label w-100 text-start' for="register-username">Username:</label>
          <input autoComplete='off' type="text" className="form-control" id="register-username" placeholder="Type username" />
        </div>
        <div class="form-group  p-2">
          <label className='form-label w-100 text-start' for="register-password">Password:</label>
          <input autoComplete='off' type="password" className="form-control" id="register-password" placeholder="Type password" />
        </div>
        <div className="form-group p-2 d-flex justify-content-center ">
        <button className='btn btn-success'>Register</button>
        </div>
       
      </div>

  )
}

export default Register