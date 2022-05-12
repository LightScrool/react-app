import './PostsPage.scss';
import {useEffect, useState} from "react";
import Posts from "../../Components/Posts";
import Container from "../../Components/UI/Container/Container";
import PostManager from "../../Components/PostManager";
import Loader from "../../Components/UI/Loader/Loader";
import PagesList from "../../Components/PagesList";
import useLoading from "../../hooks/useLoading";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/asyncActions/posts";
import {setPostsAction, deleteAllPostsAction} from "../../store/postsReducer";


function PostsPage() {
    // States
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Redux
    const posts = useSelector(state => state.posts);
    const setPosts = (posts) => {
        dispatch(setPostsAction(posts))
    }

    // Data reading
    const dispatch = useDispatch();
    const [postsFetching, postsAreLoading] = useLoading(() => dispatch(fetchPosts()));

    useEffect(() => {
        postsFetching();

        return () => {
            dispatch(deleteAllPostsAction());
        }
    }, [])


    // Posts sorting
    const sortPosts = (_sortField) => {
        console.log("SORT")
        if (!_sortField || !posts) return;

        const sortedPosts = posts.sort((a, b) => a[_sortField].localeCompare(b[_sortField]));
        setPosts([...sortedPosts]);
    }

    // Posts search
    const getQueryPosts = () => {
        console.log("FILTER")
        return [...posts].filter(post => {
            for (let key in post) {
                if (!searchQuery || post[key].toString().toLowerCase().includes(searchQuery.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    }

    // Rendering
    return (
        <div className="PostsPage">
                <Container>
                    <PostManager
                        posts={posts}
                        setPosts={setPosts}
                        sortPosts={sortPosts}
                        setSearchQuery={setSearchQuery}
                    />
                    <PagesList
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    {
                        postsAreLoading
                        ?
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '230px'}}>
                            <Loader/>
                        </div>
                        :
                        <Posts posts={getQueryPosts()} setPosts={setPosts} currentPage={currentPage}/>
                    }
                </Container>
        </div>
    );
}

export default PostsPage;
