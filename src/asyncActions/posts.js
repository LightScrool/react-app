import axios from "axios";
import {MAX_POSTS_PER_PAGE} from "../store/data";
import {addManyPostsAction} from "../store/postsReducer";

const POSTS_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = (_page=1) => {
    return function(dispatch) {
        axios.get(POSTS_DATA_URL, {
            params: {
                _limit: MAX_POSTS_PER_PAGE,
                _page
            }
        })
            .then(response => dispatch(addManyPostsAction(response.data)));
    }
}
