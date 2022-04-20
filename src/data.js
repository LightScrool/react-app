import axios from "axios";

const POSTS_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts(){
    const response = await axios.get(POSTS_DATA_URL);
    return response.data ?? [];
}

export {fetchPosts};
