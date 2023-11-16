import { useState } from 'react'
import './App.css'
import Products from './components/Products';
import User from './components/User';
function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      {user ?
       <>
        <Products />
      </>
        : <>
          <User />
         </>
      }
    </>
  )
}

export default App
