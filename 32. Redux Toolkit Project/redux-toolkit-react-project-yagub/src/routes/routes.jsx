import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage'
import UserRoot from '../pages/UserRoot'


export const ROUTES = [
    {
        path:'/',
        element: <UserRoot/>,
        children:[
            {
                index: true,
                element:<RegisterPage/>
            },
            {
                path:'/registerPage',
                element:<RegisterPage/>
            },
            {
                path:'/loginPage',
                element:<LoginPage/>
            }
        ]
    }
];