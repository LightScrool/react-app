import React from 'react';
import {MAX_POSTS_PER_PAGE} from '../data';
import '../styles/Posts.css';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Posts = ({posts, setPosts, currentPage}) => {
    let postIndex = 0;

    return (<ul className="Posts">
        {
            posts.length
            ?
            <TransitionGroup>
            {
                posts.map(post => {
                    // TODO: Solution without findDOMNode
                    postIndex++;
                    return (
                        <CSSTransition key={post.id} timeout={500} classNames="post">
                            <Post
                                post={post}
                                postIndex={postIndex + (currentPage-1)*MAX_POSTS_PER_PAGE}
                                posts={posts}
                                setPosts={setPosts}
                            />
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