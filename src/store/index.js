import {applyMiddleware, combineReducers, createStore} from "redux";
import {postsReducer} from "./postsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    postsReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
