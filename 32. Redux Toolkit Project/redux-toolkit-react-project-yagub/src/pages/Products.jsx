import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

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
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid marginTop="10px" display="flex" justifyContent="center" item xs={12}>
        <Button variant="contained" onClick={()=>{navigateTo("/addProductPage")}}>Add Product</Button>
        </Grid>
        <Grid item xs={4}>
        
        </Grid>
       
      </Grid>
    </Box>
    
    
    </>
    
  )
}

export default Products