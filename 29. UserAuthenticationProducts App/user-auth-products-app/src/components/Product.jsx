import React from 'react'
import EditProduct from './EditProduct'

const Product = ({product}) => {
  return (
    <tr>
       <td>{product.id}</td>
       <td>{product.name}</td>
       <td>{(product.price * (100 - product.discountPercentage)) / 100}</td>
       <td>{product.discountPercentage}</td>
       <td>
        <EditProduct/>
        <button className='btn btn-danger mx-2'>Delete</button>
       </td>
    </tr>
  )
}

export default Product