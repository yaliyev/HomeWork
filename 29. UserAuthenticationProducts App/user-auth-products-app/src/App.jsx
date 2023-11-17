import { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import Products from './components/Products';
import User from './components/User';
import Logout from './components/Logout';
import {getProducts} from './httprequests/product-request';
function App() {

  const [user, setUser] = useState(null);
  const [products,setProducts] = useState([]);

  useEffect(()=>{
     async function loadData(){
      let data = await getProducts();
      setProducts(data);
     }
     loadData();
  },[])

  return (
    <>
      {user ?
       <>
       <div className="container mt-3">
        <Logout user={user} setUser={setUser} />
       <Products user={user} products={products} setProducts={setProducts}/>
       </div>
        
        
      </>
        : <>
          <User setUser={setUser}/>
         </>
      }
    </>
  )
}

App.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
  products: PropTypes.array,
  setProducts: PropTypes.func
}

export default App
