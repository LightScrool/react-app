const defaultState = [];
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_POSTS = "SET_POSTS";
const DELETE_ALL_POSTS = "DELETE_ALL_POSTS";


const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload]

        case DELETE_POST:
            return [...state.filter(item => item.id !== action.payload)]

        case SET_POSTS:
            return [...action.payload]

        case DELETE_ALL_POSTS:
            return defaultState

        default:
            return state
    }
}

const addPostAction = (post) => {
    return {
        type: ADD_POST,
        payload: post
    };
}

const deletePostAction = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    };
}

const setPostsAction = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts
    };
}

const deleteAllPostsAction = () => {
    return {
        type: DELETE_ALL_POSTS,
    }
}

export {postsReducer, addPostAction, deletePostAction, setPostsAction, deleteAllPostsAction};