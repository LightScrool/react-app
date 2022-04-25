import MainPage from "./Pages/MainPage";
import PostsPage from "./Pages/PostsPage";
import SinglePostPage from "./Pages/SinglePostPage";
import SlidersPage from "./Pages/SlidersPage";
import PageNotFound from "./Pages/PageNotFound";

const routes = [
    {path: "/", exact: true, element: <MainPage/>},
    {path: "/posts", exact: true, element: <PostsPage/>},
    {path: "/posts/:id", exact: true, element: <SinglePostPage/>},
    {path: "/sliders", exact: true, element: <SlidersPage/>},
    {path: "*", exact: false, element: <PageNotFound/>}
];

export default routes;
