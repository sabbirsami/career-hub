import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root/Root";
import AppliedJobs from "./Components/Jobs/AppliedJobs";
import Home from "./Components/Home/Home";
import ErrorComponent from "./Components/ErrorComponent/ErrorComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/jobs",
                element: <AppliedJobs></AppliedJobs>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
