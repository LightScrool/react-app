const defaultState = {
    posts: [],
    searchQuery: '',
    sortField: '',
    currentPage: 1
};

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_POSTS = "SET_POSTS";
const DELETE_ALL_POSTS = "DELETE_ALL_POSTS";
const CLEAR_DATA = "CLEAR_DATA";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY"
const SET_SORT_FIELD = "SET_SORT_FIELD"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}

        case DELETE_POST:
            return {...state, posts: [...state.posts.filter(item => item.id !== action.payload)]}

        case SET_POSTS:
            return {...state, posts: [...action.payload]}

        case DELETE_ALL_POSTS:
            return {...state, posts: []}

        case CLEAR_DATA:
            return defaultState

        case SET_SEARCH_QUERY:
            return {...state, searchQuery: action.payload}

        case SET_SORT_FIELD:
            return {...state, sortField: action.payload}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}

        default:
            return state
    }
}

const addPostAction = (post) => {
    return {type: ADD_POST, payload: post};
}

const deletePostAction = (id) => {
    return {type: DELETE_POST, payload: id};
}

const setPostsAction = (posts) => {
    return {type: SET_POSTS, payload: posts};
}

const deleteAllPostsAction = () => {
    return {type: DELETE_ALL_POSTS,}
}

const clearDataAction = () => {
    return {type: CLEAR_DATA}
}

const setSearchQueryAction = (searchQuery) => {
    return {type: SET_SEARCH_QUERY, payload: searchQuery}
}

const setSortFieldAction = (sortField) => {
    return {type: SET_SORT_FIELD, payload: sortField}
}

const setCurrentPageAction = (currentPage) => {
    return {type: SET_CURRENT_PAGE, payload: currentPage}
}

export {
    postsReducer, addPostAction, deletePostAction, setPostsAction, deleteAllPostsAction, clearDataAction,
    setSearchQueryAction, setSortFieldAction, setCurrentPageAction
};