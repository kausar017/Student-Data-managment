import { createBrowserRouter } from "react-router-dom";
import Home from '../Components/Home/Home';
import Students from '../Components/Students/Students';
import Teachers from '../Components/Teachers/Teachers';
import Registration from '../Components/Registration/Registration';
import MainLayout from '../Components/mainLayout/MainLayout';
import Login from "../Components/Login/Login";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ()=> fetch('../DeboloparData.json')
            },
            {
                path: "/students",
                element: <Students />,
            },
            {
                path: "/teachers",
                element: <Teachers />,
            },
            {
                path: "/registrations",
                element: <Registration />,
            },
            {
                path: "/login",
               element: <Login></Login>
            },
        ],
    },
]);

export default routes;
