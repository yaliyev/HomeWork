import { useSelector } from 'react-redux'
import LoginPage from '../pages/LoginPage'
import Products from '../pages/Products'
import RegisterPage from '../pages/RegisterPage'
import UserRoot from '../pages/UserRoot'
import AddProduct from '../pages/AddProduct'


export const ROUTES = [
    {
        path:'/',
        element: <UserRoot/>,
        children:[
            {
                index: true,
                element:<LoginPage/>
            },
            {
                path:'/registerPage',
                element:<RegisterPage/>
            },
            {
                path:'/loginPage',
                element:<LoginPage/>
            }
            ,
            {
                path:'/products',
                element:<Products/>
            },{
                path:'/addProductPage',
                element:<AddProduct/>
            }
        ]
    }
];