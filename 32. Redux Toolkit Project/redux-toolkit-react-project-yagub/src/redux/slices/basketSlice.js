import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        add_to_basket:(state,action)=>{

        },
        remove_from_basket:(state,action)=>{

        },
        clear_basket:(state,action)=>{

        }
        
    }
})

export const {add_to_basket,remove_from_basket,clear_basket} = basketSlice.actions;

export default basketSlice.reducer;