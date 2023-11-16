import React from 'react'
import Product from './Product'

const Products = ({products}) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Annual Price</th>
          <th>Discount Percentage</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product=>{
          return <Product product={product}/>
        })}
      </tbody>
    </table>
  )
}

export default Products