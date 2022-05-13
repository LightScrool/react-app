import './PostsPage.scss';
import {useEffect, useMemo, useState} from "react";
import Posts from "../../Components/Posts";
import Container from "../../Components/UI/Container/Container";
import PostManager from "../../Components/PostManager";
import Loader from "../../Components/UI/Loader/Loader";
import PagesList from "../../Components/PagesList";
import useLoading from "../../hooks/useLoading";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/asyncActions/posts";
import {setPostsAction, deleteAllPostsAction} from "../../store/postsReducer";
import {MAX_POSTS_PER_PAGE} from "../../store/noReduxData";


function PostsPage() {
    // States
    const [searchQuery, setSearchQuery] = useState(""); // TODO: вынести стейты в редакс
    const [sortField, setSortField] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Redux
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const setPosts = (posts) => {
        dispatch(setPostsAction(posts))
    }

    // Data reading
    const [postsFetching, postsAreLoading] = useLoading(() => dispatch(fetchPosts()));

    useEffect(() => {
        postsFetching()

        return () => {
            dispatch(deleteAllPostsAction());
        }
    }, [])

    // Posts search
    const filteredPosts = useMemo(() => {
        console.log("FILTER")
        if (!searchQuery) return [...posts];

        return [...posts].filter(post => {
            for (let key in post) {
                if (post[key].toString().toLowerCase().includes(searchQuery.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    }, [posts, searchQuery])

    // Posts sorting
    const sortedFilteredPosts = useMemo(() => {
        console.log("SORT")
        if (!sortField) return filteredPosts;

        return [...filteredPosts].sort((a, b) => a[sortField].localeCompare(b[sortField]));
    }, [filteredPosts, sortField])

    // Working with pages
    const pagesQuantity = useMemo(() => {
        return Math.ceil(sortedFilteredPosts.length / MAX_POSTS_PER_PAGE);
    }, [sortedFilteredPosts])
    useEffect(() => setCurrentPage(1), [pagesQuantity])

    const postsToShowOnPage = useMemo(() => {
        const posts = [];
        for (
            let i = (currentPage - 1) * MAX_POSTS_PER_PAGE;
            i < currentPage * MAX_POSTS_PER_PAGE && i < sortedFilteredPosts.length;
            i++
        ) {
            posts.push(sortedFilteredPosts[i]);
        }
        return posts;
    }, [sortedFilteredPosts, currentPage])

    // Rendering
    return (
        <div className="PostsPage">
            <Container>
                <PostManager
                    setSortField={setSortField}
                    setSearchQuery={setSearchQuery}
                />
                {
                    postsAreLoading
                        ?
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '230px'}}>
                            <Loader/>
                        </div>
                        :
                        <>
                            <PagesList
                                pagesQuantity={pagesQuantity}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Posts posts={postsToShowOnPage} setPosts={setPosts} currentPage={currentPage}/>
                        </>
                }
            </Container>
        </div>
    );
}

export default PostsPage;
