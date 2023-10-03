import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Register from "../Pages/Register.jsx/Register";
import News from "../Pages/News/News";
import PrivateProvider from "../components/PrivateProvider/PrivateProvider";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element:<Login></Login>,
            },
            {
                path: "/register",
                element:<Register></Register>,
            },
            {
                path: "/about",
                element:<About></About>,
            },
            {
                path: "/career",
                element:<Career></Career>,
            },
            {
                path: "/news/:_id",
                element:<PrivateProvider><News></News></PrivateProvider>,
            }
        ]
    }
])

export default router;