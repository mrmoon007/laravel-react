import {Navigate, Outlet} from 'react-router-dom';
import Login from "../pages/Login";


const protectedRoutes = (isLoggedIn) =>
   ({
        path: '/',
        element: isLoggedIn ? <Outlet/> : <Navigate to="/sign-in"/>,
        children: [
            // {path: '/', element: <Home/>},
            // {path: '/home', element: <Home/>},
            // {path: '*', element: <NoPageFound/>},
        ],
    })


const publicRoutes = (isLoggedIn) => (
    {
        path: '/',
        element: !isLoggedIn ? <Outlet/> : <Navigate to="/home"/>,
        children: [
            {path: '/', element: <Login/>},
            {path: '/sign-in', element: <Login/>},
            // {path: '/signup', element: <Signup/>},
            // {path: '/contact', element: <Contact/>},
            // {path: '/about', element: <About/>},
            // {path: '*', element: <NoPageFound/>},
        ],
    }
)


const routes = (isLoggedIn) =>[protectedRoutes(isLoggedIn),publicRoutes(isLoggedIn)]
export default routes;