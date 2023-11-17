import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import AddProduct from './AddProduct'



const Products = ({products,setProducts,user}) => {
  let showenAddProductButton = <></>;
  if(user.isAdmin == 'true'){
    showenAddProductButton =  <AddProduct products={products} setProducts={setProducts}/>;
  }

  function sortProductsByPrice(){
    let data = [...products];
    data.sort((a,b)=>a.price - b.price);
    setProducts(data);
  }
  return (
    <div className='mt-3'>
      <input placeholder='Search product:' type="text" style={{width:'250px',marginRight:'10px'}} />
      <button onClick={()=>{sortProductsByPrice()}} className='btn btn-warning text-white mx-2'>Sort by price</button>
      {showenAddProductButton}
      <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Annual Price</th>
          <th>Discount Percentage</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product,index)=>{
          return <Product key={index} user={user}  products={products} setProducts={setProducts} index={index}  product={product}/>
        })}
      </tbody>
    </table>
    </div>
  )
}

export default Products