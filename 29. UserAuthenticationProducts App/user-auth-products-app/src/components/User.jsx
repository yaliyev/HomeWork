import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Register from './Register'
const User = ({setUser}) => {
  const [userAction,setUserAction] = useState('login');
  let showenLayout = null;
  if(userAction == 'login'){
     showenLayout = <Register setUserAction={setUserAction}/>;
  }else{
    showenLayout = <Login setUser={setUser}/>;
  }
  return (
    <>
       <div className="row justify-content-center my-3">
      <div className="col-4">
       {
         showenLayout
       } 

      <div className='d-flex justify-content-center '>
      <button onClick={()=>{
        if(userAction == 'login'){
          setUserAction('register');
        }else{
          setUserAction('login');
        }
      }} className='btn btn-light'>Do you want to {userAction}?</button>
      </div>
      
      </div>
   </div>
    </>
  )
}

export default User