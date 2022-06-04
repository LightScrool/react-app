import {IRoute} from "./types";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage";
import SlidersPage from "./pages/SlidersPage";
// import PostsPage from "./Pages/PostsPage/PostsPage";
// import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
// import ScrollPage from "./Pages/ScrollPage/ScrollPage.tsx";

const ROUTES: IRoute[] = [
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <MainPage/>},
    {path: "/sliders", element: <SlidersPage/>},
    // {path: "/posts", element: <PostsPage/>},
    // {path: "/posts/:id", element: <SinglePostPage/>},
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
