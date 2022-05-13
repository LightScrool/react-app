import axios from "axios";
import {setPostsAction} from "../postsReducer";

const POSTS_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPostsAsyncAction = () => {
    return function(dispatch) {
        axios.get(POSTS_DATA_URL)
            .then(response => response.data)
            .then(data => dispatch(setPostsAction(data)));
    }
}
