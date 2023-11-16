import { useState } from 'react'
import Products from './components/Products';
import User from './components/User';
import Logout from './components/Logout';
function App() {

  const [user, setUser] = useState(null);
  const [products,setProducts] = useState([]);

  return (
    <>
      {user ?
       <>
       <div className="container mt-3">
        <Logout user={user} setUser={setUser} />
       <Products products={products} />
       </div>
        
        
      </>
        : <>
          <User setUser={setUser}/>
         </>
      }
    </>
  )
}

export default App
