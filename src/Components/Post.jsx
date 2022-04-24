import React from 'react';
import '../styles/Post.css';
import MyButton from "./UI/MyButton/MyButton";
import {getTitled} from '../utils';
import {useLocation, useNavigate} from "react-router-dom";

const Post = ({post, postIndex, posts, setPosts}) => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    const goToPost = () => {
        navigate(`${pathname}/${post.id}`);
    }
    const deletePost = (event) => {
        event.stopPropagation();
        setPosts(posts.filter(currentPost => currentPost.id !== post.id));
    }

    return (
        <li className='Post' onClick={goToPost}>
            <div className="Post__content">
                <h2 className="Post__title">{`${postIndex}) ${getTitled(post.title)}`}</h2>
                <div className="Post__text">{getTitled(post.body)}</div>
            </div>
            <MyButton className="Post__button" onClick={deletePost}>Удалить</MyButton>
        </li>
    );
};

export default Post;