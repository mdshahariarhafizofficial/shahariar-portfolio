import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import { lazy } from "react";

const Home = lazy(() => import("../Page/Home/Home"));


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    }
]);

export default router;