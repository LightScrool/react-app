import axios from "axios";

const POSTS_DATA_URL = "https://jsonplaceholder.typicode.com/posts";
const MAX_POSTS_PER_PAGE = 10;

async function fetchPosts(_page=1){
    return await axios.get(POSTS_DATA_URL, {
        params: {
            _limit: MAX_POSTS_PER_PAGE,
            _page
        }
    });
}

export {fetchPosts, MAX_POSTS_PER_PAGE};
