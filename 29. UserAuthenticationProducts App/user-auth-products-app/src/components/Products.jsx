import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import AddProduct from './AddProduct'



const Products = ({products,setProducts}) => {
  
  return (
    <div className='mt-3'>
      <input placeholder='Search product:' type="text" style={{width:'250px',marginRight:'10px'}} />
      <button className='btn btn-warning text-white mx-2'>Sort by price</button>
      <AddProduct products={products} setProducts={setProducts}/>
      <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Annual Price</th>
          <th>Discount Percentage</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product=>{
          return <Product key={product.id} product={product}/>
        })}
      </tbody>
    </table>
    </div>
  )
}

export default Products