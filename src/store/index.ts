// TODO: typing
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {postsReducer} from "./postsReducer";

const rootReducer = combineReducers({
    postsReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
