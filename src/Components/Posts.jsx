import React from 'react';
import {MAX_POSTS_PER_PAGE} from '../store/noReduxData';
import '../styles/Posts.scss';
import Post from "./Post";
import {TransitionGroup} from "react-transition-group";
import {useSelector} from "react-redux";

const Posts = ({posts, currentPage}) => {
    let localPostIndex = 0;

    const gp = useSelector(state => state.posts);
    if (!posts.length) console.log(gp);

    return (<ul className="Posts">
        {
            posts.length
            ?
            <TransitionGroup>
            {
                posts.map(post => {
                    localPostIndex++;
                    return (
                        // CSSTransition is located inside "Post" component, because each of CSSTransitions
                        // needs its own ref, and it is forbidden to use useRef (and any other hooks)
                        // inside callback
                        <Post
                            key={post.id}
                            post={post}
                            postIndex={localPostIndex + (currentPage-1)*MAX_POSTS_PER_PAGE}
                        />
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