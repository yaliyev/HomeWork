import React from 'react'
import EditProduct from './EditProduct'
import {deleteProduct} from '../httprequests/product-request'
const Product = ({index,product,products,setProducts,user}) => {
  let showenEditProductButton = <></>;
  let showenDeleteProductButton = <></>;

  if(user.isAdmin == 'true'){
    showenEditProductButton =  <EditProduct  products={products} setProducts={setProducts} index={index} product={product} />;
    showenDeleteProductButton = <button onClick={()=>{
      let data = [...products];
      data.splice(index,1);
      deleteProduct(product.id);
      setProducts(data);
    }} className='btn btn-danger mx-2'>Delete</button>;
  }

  return (
    <tr>
       <td>{product.id}</td>
       <td>{product.name}</td>
       <td>{(product.price * (100 - product.discountPercentage)) / 100}</td>
       <td>{product.discountPercentage}</td>
       <td>{product.createdAt}</td>
       <td>
        {showenEditProductButton}
        {showenDeleteProductButton}
       </td>
    </tr>
  )
}

export default Product