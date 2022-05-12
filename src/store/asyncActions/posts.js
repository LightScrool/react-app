import axios from "axios";
import {setPostsAction} from "../postsReducer";

const POSTS_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => {
    return function(dispatch) {
        axios.get(POSTS_DATA_URL)
            .then(response => dispatch(setPostsAction(response.data)));
    }
}
