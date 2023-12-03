import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {isLogined:false}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        sign_in:(state,action)=>{
           state.user.isLogined = true
          
        },
        sign_out:(state,action)=>{
            state.isLogined = false
        }
        
    }
})

export const {sign_in,sign_out} = userSlice.actions;

export default userSlice.reducer;