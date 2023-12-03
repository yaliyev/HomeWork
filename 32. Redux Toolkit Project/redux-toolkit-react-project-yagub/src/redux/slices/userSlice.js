import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        sign_in:(state,action)=>{

        },
        sign_out:(state,action)=>{

        }
        
    }
})