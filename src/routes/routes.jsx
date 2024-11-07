import { createBrowserRouter } from "react-router-dom";
import Home from '../Components/Home/Home';
import Students from '../Components/Students/Students';
import Teachers from '../Components/Teachers/Teachers';
import Registration from '../Components/Registration/Registration';
import Login from '../Components/Login/Login';
import MainLayout from '../Components/mainLayout/MainLayout';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
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
                element: <Login />,
            },
        ],
    },
]);

export default routes;
