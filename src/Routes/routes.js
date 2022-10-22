import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/AuthenticationPage/Login/Login";
import Register from "../Pages/AuthenticationPage/Register/Register";
import Catagory from "../Pages/CatagoryPage/Catagory/Catagory";
import Home from "../Pages/HomePage/Home/Home";
import News from "../Pages/NewsPage/News/News";
import Profile from "../Pages/others/Profile";
import TermsAndCondition from "../Pages/others/TermsAndCondition";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Catagory></Catagory>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoutes><News></News></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
        ]
    }
])