import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Products = () => {

  const navigateTo = useNavigate();  

  let user = useSelector((state)=>state.user.user);

  useEffect(()=>{

    if(!user.isLogined){
        navigateTo("/loginPage")
        Swal.fire({
            icon: "error",
            title: "Products page",
            text: "First of all login please",
            timer:1600
          })

    }

  },[])

  return (
    <div>Products</div>
  )
}

export default Products