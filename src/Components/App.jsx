import '../styles/App.css';
import {useEffect, useState} from "react";
import Posts from "./Posts";
import Container from "./UI/Container/Container";
import PostManager from "./PostManager";
import {fetchPosts} from "../data";
import Loader from "./UI/Loader/Loader";
import useFetching from "../hooks/useFetching";
import PageList from "./PageList";


function App() {
    // States
    const [posts, setPosts] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [totalPostCount, setTotalPostCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Data reading on component mount
    const [postsFetching, postsIsLoading] = useFetching(async (...args) => {
        const fetchedPosts = await fetchPosts(...args);
        const posts = fetchedPosts.data ?? [];
        setTotalPostCount(parseInt(fetchedPosts.headers["x-total-count"]));
        setPosts(posts);
    });

    useEffect(() => {
        postsFetching(currentPage).then();
    }, [currentPage])

    // Posts sorting
    const sortPosts = (_sortField) => {
        if (!_sortField || !posts) return;

        const sortedPosts = posts.sort((a, b) => a[_sortField].localeCompare(b[_sortField]));
        setPosts([...sortedPosts]);
    }

    // Posts search
    const getQueryPosts = () => {
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
        <div className="App">
            {
                postsIsLoading
                ?
                <Loader/>
                :
                <Container>
                    <PostManager
                        posts={posts}
                        setPosts={setPosts}
                        sortPosts={sortPosts}
                        setSearchQuery={setSearchQuery}
                    />
                    <PageList
                        totalPostCount={totalPostCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    <Posts posts={getQueryPosts()} setPosts={setPosts} currentPage={currentPage}/>
                </Container>
            }
        </div>
    );
}

export default App;
