import React from 'react';
import '../styles/Post.css';
import MyButton from "./UI/MyButton/MyButton";

const Post = ({post, postIndex, posts, setPosts}) => {

    const deletePost = () => {
        setPosts(posts.filter(currentPost => currentPost.id !== post.id));
    }

    return (
        <li className='Post'>
            <div className="Post__content">
                <h2 className="Post__title">{`${postIndex}) ${post.title}`}</h2>
                <div className="Post__text">{post.body}</div>
            </div>
            <MyButton onClick={() => deletePost()}>Удалить</MyButton>
        </li>
    );
};

export default Post;