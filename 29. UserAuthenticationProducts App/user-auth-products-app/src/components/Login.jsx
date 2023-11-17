import React from 'react'
import Swal from 'sweetalert2'
import { useRef } from 'react'
import { login } from '../httprequests/user-request'
const Login = ({setUser}) => {

  let usernameRef = useRef(null);
  let passwordRef = useRef(null);

  async function loginUser(e) {
    e.preventDefault();
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;

    let user = {
      name: username,
      password: password
    };

    let resultUser = await login(user);
    if (resultUser == undefined) {
      Swal.fire({
        title: "User Login",
        text: "Your username and password are incorrect.",
        icon: "error",
        timer: 1300
      });
    }else{
      Swal.fire({
        title: "User Login",
        text: "You have been logined",
        icon: "success",
        timer: 1300
      }).then(()=>{
        setUser({name: resultUser.name,isAdmin: resultUser.isAdmin});
      });
      
    }

  }

  return (

    <div className="login-box border my-3 p-3">
      <h3 className=' text-center mb-4'>Login Form</h3>
      <form onSubmit={(e) => { loginUser(e) }} >
        <div className="form-group  p-2">
          <label className='form-label w-100 text-start' >Username:</label>
          <input ref={usernameRef} autoComplete='off' type="text" className="form-control" id="login-username" placeholder="Type username" />
        </div>
        <div className="form-group  p-2">
          <label className='form-label w-100 text-start' >Password:</label>
          <input ref={passwordRef} autoComplete='off' type="password" className="form-control" id="login-password" placeholder="Type password" />
        </div>
        <div className="form-group p-2 d-flex justify-content-center ">
          <button className='btn btn-success'>Login</button>
        </div>
      </form>

    </div>


  )
}

export default Login