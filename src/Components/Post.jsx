import React, {useRef} from 'react';
import '../styles/Post.scss';
import MyButton from "./UI/MyButton/MyButton";
import {getTitled} from '../utils';
import {useLocation, useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {useDispatch} from "react-redux";
import {deletePostAction} from "../store/postsReducer";

const Post = ({post, postIndex, ...CSSTransitionProps}) => {
    // CSSTransitionProps are hidden props, that TransitionGroup should
    // pass to each CSSTransition component

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const nodeRef = useRef();
    const dispatch = useDispatch();

    const goToPost = () => {
        navigate(`${pathname}/${post.id}`);
    }
    const deletePost = (event) => {
        event.stopPropagation();
        dispatch(deletePostAction(post.id))
    }

    return (
        <CSSTransition
            timeout={500}
            classNames="post"
            nodeRef={nodeRef}
            {...CSSTransitionProps}
        >
            <li className='Post' ref={nodeRef} onClick={goToPost}>
                <div className="Post__content">
                    <h2 className="Post__title">{`${postIndex}) ${getTitled(post.title)}`}</h2>
                    <div className="Post__text">{getTitled(post.body)}</div>
                </div>
                <MyButton className="Post__button" onClick={deletePost}>Удалить</MyButton>
            </li>
        </CSSTransition>
    );
};

export default Post;