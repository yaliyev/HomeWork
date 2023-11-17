import React from 'react'
import Swal from 'sweetalert2'
import {editProduct} from '../httprequests/product-request'
const EditProduct = ({index,product,products,setProducts}) => {
  function editProductModal(){
    Swal.fire({
      title: "<strong>Edit Product</strong>",
      html: `
        <div class='form-group my-2'>
        <input id='editproduct-name' value='`+product.name+`' class='form-control' placeholder='name' />
        </div>
        <div class='form-group my-2'>
        <input id='editproduct-price' value='`+product.price+`' type='price' class='form-control' placeholder='price' />
        </div>
        <div class='form-group my-2'>
        <input id='editproduct-discountpercentage' value='`+product.discountPercentage+`' type='price' class='form-control' placeholder='discountPercentage' />
        </div>
      `,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        Submit
      `
    }).then((result)=>{
    if(result.isConfirmed){
   let name = document.getElementById('editproduct-name');
   let price = document.getElementById('editproduct-price');
   let discountPercentage = document.getElementById('editproduct-discountpercentage');

   let editProductObj = {
    id: product.id,
    name: name.value,
    price: Number(price.value),
    discountPercentage: Number(discountPercentage.value),
    createdAt: product.createdAt
   }
  editProduct(product.id,editProductObj);

  let data = [...products];
  data[index] = editProductObj;
  setProducts(data);
    }
    });
  }
  return (
    <button onClick={()=>{editProductModal()}}  className='btn btn-warning'>Edit Product</button>
  )
}

export default EditProduct