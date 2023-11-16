import React from 'react'
import Swal from 'sweetalert2'

const Logout = ({user,setUser}) => {
  function logOut(){
    Swal.fire({
      title: "User logout",
      text: "You have been logged out.Bye",
      icon: "info",
      timer: 1550
    }).then(()=>{
      setUser(null);
    })
    
  }
  return (
    <>
    <span>User: <b className='mx-2'>{user.name}</b></span>
    <button onClick={()=>{logOut()}} className='btn btn-danger mx-2'>Logout</button>
    </>
    
  )
}

export default Logout