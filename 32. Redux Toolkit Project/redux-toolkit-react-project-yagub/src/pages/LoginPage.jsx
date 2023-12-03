import React, { useRef } from 'react'
import { TextField, FormControl, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from 'formik'
import {login,isExist} from '../services/api/user_request'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import {sign_in} from '../redux/slices/userSlice'

const LoginPage = () => {

    let user = useSelector((state)=>state.user.user);
    let dispatch = useDispatch();

    const navigateTo  = useNavigate();


    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async(values, actions) => {
           const userLoginObject = {
            username: values.username,
            password: values.password
           }
           const loginUserResult = await login(userLoginObject);

          if(!loginUserResult){
            Swal.fire({
                icon: "error",
                title: "Login",
                text: "Username and password are invalid",
                timer:1300
              })
          }else{
            Swal.fire({
                icon: "success",
                title: "Login",
                text: "You are logined",
                timer:1300
              }).then(()=>{
                 dispatch(sign_in());
                 navigateTo("/products");
              })
          }
           
        }
    })

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <h2 style={{ textAlign: 'center' }}>Login Form</h2>
            <TextField
                label="Username"
                name="username"
                onChange={formik.handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={formik.values.username}
                sx={{ mb: 3 }}
                fullWidth


            />
            <TextField
                label="Password"
                name="password"
                onChange={formik.handleChange}
                required
                variant="outlined"
                color="secondary"
                type="password"
                value={formik.values.password}
                fullWidth
                sx={{ mb: 3 }}
            />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined" color="secondary" type="submit">Login</Button>
            </div>


        </form>
    )
}

export default LoginPage