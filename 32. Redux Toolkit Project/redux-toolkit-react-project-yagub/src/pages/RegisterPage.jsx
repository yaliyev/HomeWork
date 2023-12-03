import React, { useRef } from 'react'
import { TextField, FormControl, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from 'formik'
import {register,login,isExist} from '../services/api/user_request'
import Swal from 'sweetalert2'

const RegisterPage = () => {

    const navigateTo  = useNavigate();


    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async(values, actions) => {
           const user = {
            username: values.username,
            password: values.password
           }
           const isExistUser = await isExist(user);

          if(!isExistUser){
            await register(user)
            Swal.fire({
                icon: "success",
                title: "Register",
                text: "User registered",
                timer:1300
              }).then(()=>{
                navigateTo('/loginPage')
              })
          }
           
        }
    })

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <h2 style={{ textAlign: 'center' }}>Register Form</h2>
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
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </div>


        </form>
    )
}

export default RegisterPage