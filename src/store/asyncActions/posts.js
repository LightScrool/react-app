import axios from "axios";
import {setPostsAction} from "../postsReducer";

const POSTS_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPostsAsyncAction = () => {
    return async function (dispatch) {
        const response = await axios.get(POSTS_DATA_URL);
        const data = await response.data;
        dispatch(setPostsAction(data));
    }
}
