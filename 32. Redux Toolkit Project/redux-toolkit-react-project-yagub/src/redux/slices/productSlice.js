import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        add_product:(state,action)=>{
            console.log(action.payload);
        //    state.products.push(action.payload);
        },
        edit_product:(state,action)=>{

        },
        delete_product:(state,action)=>{

        }
        
    }
})