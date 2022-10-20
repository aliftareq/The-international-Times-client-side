import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Catagory from "../Pages/CatagoryPage/Catagory/Catagory";
import Home from "../Pages/HomePage/Home/Home";
import News from "../Pages/NewsPage/News/News";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>
            },
            {
                path: '/news/:id',
                element: <News></News>
            },
        ]
    }
])