// import MainPage from "./Pages/MainPage/MainPage";
// import PostsPage from "./Pages/PostsPage/PostsPage";
// import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
// import SlidersPage from "./Pages/SlidersPage/SlidersPage.tsx";
// import PageNotFound from "./Pages/PageNotFound/PageNotFound";
// import TestPage from "./Pages/TestPage/TestPage";
// import ScrollPage from "./Pages/ScrollPage/ScrollPage.tsx";
import {IRoute} from "./types";

const ROUTES: IRoute[] = [
    // {path: "/", exact: true, element: <MainPage/>},
    // {path: "/posts", exact: true, element: <PostsPage/>},
    // {path: "/test", exact: true, element: <TestPage/>},
    // {path: "/posts/:id", exact: true, element: <SinglePostPage/>},
    // {path: "/sliders", exact: true, element: <SlidersPage/>},
    // {path: "/scroll", exact: true, element: <ScrollPage/>},
    // {path: "*", exact: false, element: <PageNotFound/>}
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
