import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLayout from "../layout/AdminLayout";
import AddService from "../pages/AddService";
import PrivateRoute from "./PrivateRoute";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index:true,
                element:<Home></Home>
            },
            {
                path: 'about',
                element:<PrivateRoute><About></About></PrivateRoute>
            },
        ]
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    {
        path: '/register',
        element:<Register></Register>
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                 index:true,
                element:<AddService></AddService>
            }
        ]
    }
])

export default myCreatedRoute;