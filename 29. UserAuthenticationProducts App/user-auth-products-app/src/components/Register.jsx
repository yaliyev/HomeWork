import React from 'react'
import Swal from 'sweetalert2'
import { useRef } from 'react'
import {register} from '../httprequests/user-request'
const Register = ({setUserAction}) => {

  let usernameRef = useRef(null);
  let passwordRef = useRef(null);
  let emailRef = useRef(null);
  let isAdminRef = useRef(null);
  
  async function registerUser(e){
    e.preventDefault();
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    let email = emailRef.current.value;
    let isAdmin = isAdminRef.current.value;

    let user = {
      name: username,
      password: password,
      email: email,
      isAdmin: isAdmin
    }

    await register(user);
    
    Swal.fire({
      title: "Register",
      text: "User has been registered",
      icon: "success",
      timer:1300
    }).then(()=>{
      setUserAction('register');
    })

  
    
  }
 

  return (
      <div className="register-box my-3 border p-3">
        <h3 className=' text-center mb-4'>Register Form</h3>
        <form onSubmit={(e)=>{registerUser(e)}} >
        <div className="form-group  p-2">
          <label className='form-label w-100 text-start' >Username:</label>
          <input ref={usernameRef} autoComplete='off' type="text" className="form-control" id="register-username" placeholder="Type username" />
        </div>
        <div className="form-group  p-2">
          <label className='form-label w-100 text-start' >Password:</label>
          <input ref={passwordRef} autoComplete='off' type="password" className="form-control" id="register-password" placeholder="Type password" />
        </div>
        <div className="form-group  p-2">
          <label className='form-label w-100 text-start' >Email:</label>
          <input ref={emailRef} autoComplete='off' type="text" className="form-control" id="register-email" placeholder="Type email" />
        </div>
        <div className="form-group  p-2">
          <label className='form-label w-100 text-start' >isAdmin:</label>
          <select ref={isAdminRef} className='form-control'>
            <option value="false">false</option>
            <option value="false">true</option>
          </select>
        </div>
        <div className="form-group p-2 d-flex justify-content-center ">
        <button className='btn btn-success'>Register</button>
        </div>
        </form>
        
        
       
      </div>

  )
}

export default Register