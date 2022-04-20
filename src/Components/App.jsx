import '../styles/App.css';
import {useEffect, useState} from "react";
import Posts from "./Posts";
import Container from "./UI/Container/Container";
import PostManager from "./PostManager";
import {fetchPosts} from "../data";
import Loader from "./UI/Loader/Loader";

function App() {
    // States
    const [posts, setPosts] = useState([])
    const [searchQuery, setSearchQuery] = useState(null);

    // Data reading on component mount
    const [postsIsLoad, setPostsIsLoad] = useState(false);
    useEffect(() => {
        fetchPosts().then(result => {
            setPosts(result);
            setPostsIsLoad(true);
        });
    }, [])

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
                postsIsLoad
                ?
                <Container>
                    <PostManager
                        posts={posts}
                        setPosts={setPosts}
                        sortPosts={sortPosts}
                        setSearchQuery={setSearchQuery}
                    />
                    <Posts posts={getQueryPosts()} setPosts={setPosts}/>
                </Container>
                :
                <Loader/>
            }
        </div>
    );
}

export default App;
