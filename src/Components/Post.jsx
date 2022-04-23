import React from 'react';
import '../styles/Post.css';
import MyButton from "./UI/MyButton/MyButton";
import {getTitled} from '../utils';

const Post = ({post, postIndex, posts, setPosts}) => {

    const deletePost = () => {
        setPosts(posts.filter(currentPost => currentPost.id !== post.id));
    }

    return (
        <li className='Post'>
            <div className="Post__content">
                <h2 className="Post__title">{`${postIndex}) ${getTitled(post.title)}`}</h2>
                <div className="Post__text">{getTitled(post.body)}</div>
            </div>
            <MyButton className="Post__button" onClick={() => deletePost()}>Удалить</MyButton>
        </li>
    );
};

export default Post;