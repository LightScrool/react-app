// TODO: typing
import {IPost} from "../types/projectTypes";

const defaultState = {
    posts: [],
    searchQuery: '',
    sortField: '',
    currentPage: 1
};

const ADD_POST: string = "ADD_POST";
const DELETE_POST: string = "DELETE_POST";
const SET_POSTS: string = "SET_POSTS";
const DELETE_ALL_POSTS: string = "DELETE_ALL_POSTS";
const CLEAR_DATA: string = "CLEAR_DATA";
const SET_SEARCH_QUERY: string = "SET_SEARCH_QUERY"
const SET_SORT_FIELD: string = "SET_SORT_FIELD"
const SET_CURRENT_PAGE: string = "SET_CURRENT_PAGE"

export const postsReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}

        case DELETE_POST:
            return {...state, posts: [...state.posts.filter((item: any) => item.id !== action.payload)]}

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

export const addPostAction = (post: IPost) => {
    return {type: ADD_POST, payload: post};
}

export const deletePostAction = (id: number) => {
    return {type: DELETE_POST, payload: id};
}

export const setPostsAction = (posts: IPost[]) => {
    return {type: SET_POSTS, payload: posts};
}

export const deleteAllPostsAction = () => {
    return {type: DELETE_ALL_POSTS,}
}

export const clearDataAction = () => {
    return {type: CLEAR_DATA}
}

export const setSearchQueryAction = (searchQuery: string) => {
    return {type: SET_SEARCH_QUERY, payload: searchQuery}
}

export const setSortFieldAction = (sortField: string) => {
    return {type: SET_SORT_FIELD, payload: sortField}
}

export const setCurrentPageAction = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, payload: currentPage}
}
