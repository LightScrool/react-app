import React from 'react';
import '../styles/Posts.css';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Posts = ({posts, setPosts}) => {
    let postIndex = 0;

    return (<ul className="Posts">
        {
            posts.length
            ?
            <TransitionGroup>
            {
                posts.map(post => {
                    postIndex++;
                    return (
                        <CSSTransition key={post.id} timeout={500} classNames="post">
                            <Post  post={post} postIndex={postIndex} posts={posts} setPosts={setPosts}/>
                        </CSSTransition>
                    )
                })
            }
            </TransitionGroup>
            :
            <h1 className='Posts__not-found'>Посты не найдены!</h1>
        }
    </ul>);
};

export default Posts;