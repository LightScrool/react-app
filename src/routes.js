import MainPage from "./Pages/MainPage/MainPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
import SlidersPage from "./Pages/SlidersPage/SlidersPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

const routes = [
    {path: "/", exact: true, element: <MainPage/>},
    {path: "/posts", exact: true, element: <PostsPage/>},
    {path: "/posts/:id", exact: true, element: <SinglePostPage/>},
    {path: "/sliders", exact: true, element: <SlidersPage/>},
    {path: "*", exact: false, element: <PageNotFound/>}
];

export default routes;
