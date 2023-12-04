import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/api/product_request";

async function loadData() {
    const data = await getProducts();
    return data;
}

const initialState = {
    products: []
}

const productSlice = createSlice({

    name: 'product',
    initialState,
    reducers: {
        add_product: (state, action) => {
            console.log(action.payload);
            //    state.products.push(action.payload);
        },
        edit_product: (state, action) => {

        },
        delete_product: (state, action) => {

        }

    }
})



export const { add_product, edit_product, delete_product, INIT } = productSlice.actions;

export default productSlice.reducer;