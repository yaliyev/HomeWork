import React from 'react'

const Product = ({product}) => {
  return (
    <tr>
       <td>{product.id}</td>
       <td>{product.name}</td>
       <td>{(product.price * (100 - product.discountPercentage)) / 100}</td>
       <td>{product.discountPercentage}</td>
    </tr>
  )
}

export default Product