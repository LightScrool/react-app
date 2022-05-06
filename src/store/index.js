import {combineReducers, createStore} from "redux";
import {postsReducer} from "./postsReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    posts: postsReducer,
})


// TODO configureStore
export const store = createStore(rootReducer, composeWithDevTools());
