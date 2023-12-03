import React from 'react'
import { Box, AppBar, Toolbar, Button, IconButton, Typography,Badge } from '@mui/material'


import MenuIcon from '@mui/icons-material/Menu'
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            <Link style={{ color: 'white' }} to={"/products"}>Products</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            <Link style={{ color: 'white' }} to={"/loginPage"}>Login
             
            </Link>

          </Typography>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            <Link style={{ color: 'white' }} to={"/registerPage"}>Register
             
            </Link>

          </Typography>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            <Link style={{ color: 'white' }} to={"/basket"}>Basket
             
            </Link>

          </Typography>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            <Link style={{ color: 'white' }} to={"/user"}>User
             
            </Link>

          </Typography>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            <Link style={{ color: 'white' }} to={"/logout"}>Logout
             
            </Link>

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar