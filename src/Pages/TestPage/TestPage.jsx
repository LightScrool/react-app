import React, {useEffect} from 'react';
import "./TestPage.scss"
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../../Components/UI/MyButton/MyButton";
import {addPostAction, deletePostAction} from "../../store/postsReducer";
import {fetchPosts} from "../../store/asyncActions/posts";
import useLoading from "../../hooks/useLoading";
import Loader from "../../Components/UI/Loader/Loader";

const TestPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.posts);

    const addPost = () => dispatch(addPostAction({
        id: Date.now(),
        title: "Artem"
    }))

    const deletePost = (id) => dispatch(deletePostAction(id))

    const [loadPosts, loading] = useLoading(() => dispatch(fetchPosts()));

    useEffect(() => {
        loadPosts();
    }, [])

    return (
        <div className="TestPage">
            <MyButton onClick={addPost} className="TestPage__button">Add</MyButton>
            <MyButton onClick={addPost} className="TestPage__button">Load</MyButton>
            <p>Items:</p>
            {
                loading
                ?
                <Loader/>
                :
                data.map(item => <p key={item.id} onClick={() => deletePost(item.id)} className="TestPage__item">{`${item.id} ${item.title}`}</p>)
            }
        </div>
    );
};

export default TestPage;