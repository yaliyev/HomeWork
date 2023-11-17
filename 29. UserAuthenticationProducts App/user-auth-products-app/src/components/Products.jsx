import React  from 'react'
import { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import AddProduct from './AddProduct'



const Products = ({products,setProducts,user}) => {

  const [searchProducts,setSearchProducts] = useState([]);

  useEffect(()=>{
       setSearchProducts(products)
  },[products])

  let showenAddProductButton = <></>;
  if(user.isAdmin == 'true'){
    showenAddProductButton =  <AddProduct products={products} setProducts={setProducts}/>;
  }

  function sortProductsByPrice(){
    let data = [...products];
    data.sort((a,b)=>a.price - b.price);
    setSearchProducts(data);
  }
  function searchProduct(e){
     let searchTxt = e.target.value.trim();

     if(searchTxt == ''){
      setSearchProducts(products);
     }else{
      let data = [...products];

      let searchResult = data.filter((product)=>product.name.toLowerCase().indexOf(searchTxt.toLowerCase())>-1);
  
      setSearchProducts(searchResult);
     }

    

  }
  return (
    <div className='mt-3'>
      <input onChange={(e)=>{searchProduct(e)}} placeholder='Search product:' type="text" style={{width:'250px',marginRight:'10px'}} />
      <button onClick={()=>{sortProductsByPrice()}} className='btn btn-warning text-white mx-2'>Sort by price</button>
      {showenAddProductButton}
      <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Annual Price</th>
          <th>Discount Percentage</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {searchProducts.map((product,index)=>{
          return <Product key={index} user={user}  products={products} setProducts={setProducts} index={index}  product={product}/>
        })}
      </tbody>
    </table>
    </div>
  )
}
Products.propTypes = {
  user: PropTypes.object,
  products: PropTypes.array,
  setProducts: PropTypes.func
}
export default Products