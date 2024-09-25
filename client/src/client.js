import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Something from "./components/Firstdevision/Navsub/Something";
import Profile from "./components/Firstdevision/Navsub/Profile";
import Navbar from "./components/Firstdevision/Navbar";
import Updatessection from "./components/Firstdevision/Updatessection";
import Postingsection from "./components/Firstdevision/Postingsection";
import EnterPage from "./components/EnterPage";
import Login from "./components/Login";
import Signup from "./components/signup";

const App = () => {
    return (
        <div className="flex">
            <Navbar />
            <div className="flex-1 h-screen overflow-y-auto p-7">
                <Outlet />
            </div>
            <Updatessection />
        </div>
    );
};

const Approuter = createBrowserRouter([
    {
        path: "/connecting",
        element: <App />,
        children: [
            {
                path: "/connecting",
                element: <Postingsection />
            },
            {
                path: "/connecting/something",
                element: <Something />
            },
            {
                path: "/connecting/profile",
                element: <Profile />
            },
        ],
        errorElement: <Error />
    },
    {
        path: "/",
        element: <EnterPage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter} />);
