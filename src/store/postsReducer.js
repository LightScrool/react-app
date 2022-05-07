const defaultState = [];
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const ADD_MANY_POSTS = "ADD_MANY_POSTS";


const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload]

        case DELETE_POST:
            return [...state.filter(item => item.id !== action.payload)]

        case ADD_MANY_POSTS:
            console.log(action.payload)
            return [...state, ...action.payload]

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

const addManyPostsAction = (posts) => {
    return {
        type: ADD_MANY_POSTS,
        payload: posts
    };
}

export {postsReducer, addPostAction, deletePostAction, addManyPostsAction};