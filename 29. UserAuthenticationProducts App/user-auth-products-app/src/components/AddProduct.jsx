import React from 'react'
import Swal from 'sweetalert2'
import moment from 'moment';
import {addProduct} from '../httprequests/product-request'


const AddProduct = ({products,setProducts}) => {
  function addProductModal(){
    Swal.fire({
      title: "<strong>Add Product</strong>",
      html: `
        <div class='form-group my-2'>
        <input id='addproduct-name' class='form-control' placeholder='name' />
        </div>
        <div class='form-group my-2'>
        <input id='addproduct-price' type='price' class='form-control' placeholder='price' />
        </div>
        <div class='form-group my-2'>
        <input id='addproduct-discountpercentage' type='price' class='form-control' placeholder='discountPercentage' />
        </div>
      `,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        Submit
      `
    }).then((result)=>{
    if(result.isConfirmed){
   let name = document.getElementById('addproduct-name');
   let price = document.getElementById('addproduct-price');
   let discountPercentage = document.getElementById('addproduct-discountpercentage');
let maxId = 0;
products.forEach((product)=>{
  if(product.id > maxId){
    maxId = Number(product.id);
  }
})
   let product = {
    id: maxId + 1,
    name: name.value,
    price: Number(price.value),
    discountPercentage: Number(discountPercentage.value),
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
   }
  addProduct(product);
  let data = [...products];
  data.push(product);
  setProducts(data);
    }
    });
  }
  return (
    <button onClick={()=>{addProductModal()}} className='btn btn-success'>Add Product</button>
  )
}

export default AddProduct