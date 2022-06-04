import {IRoute} from "./types";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage";
// import PostsPage from "./Pages/PostsPage/PostsPage";
// import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
// import SlidersPage from "./Pages/SlidersPage/SlidersPage.tsx";
// import TestPage from "./Pages/TestPage/TestPage";
// import ScrollPage from "./Pages/ScrollPage/ScrollPage.tsx";

const ROUTES: IRoute[] = [
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <MainPage/>},
    // {path: "/posts", element: <PostsPage/>},
    // {path: "/test", element: <TestPage/>},
    // {path: "/posts/:id", element: <SinglePostPage/>},
    // {path: "/sliders", element: <SlidersPage/>},
    // {path: "/scroll", element: <ScrollPage/>},
];

export interface INavRoute {
    path: string,
    name: string,
}

export const ROUTES_IN_NAVIGATION: INavRoute[] = [
    {path: "/posts", name: "Posts"},
    {path: "/sliders", name: "Sliders"},
    {path: "/scroll", name: "Scroll"},
];

export default ROUTES;
