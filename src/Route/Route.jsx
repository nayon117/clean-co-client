import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import App from "../App";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<ErrorPage></ErrorPage>
        
    }
])

export default myCreatedRoute;