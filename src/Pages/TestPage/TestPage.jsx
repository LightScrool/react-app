import React from 'react';
import "./TestPage.scss"
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../../Components/UI/MyButton/MyButton";
import {addPostAction, deletePostAction} from "../../store/postsReducer";

const TestPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.posts);

    const addPost = () => dispatch(addPostAction({
        id: Date.now(),
        title: "Artem"
    }))

    const deletePost = (id) => dispatch(deletePostAction(id))

    return (
        <div className="TestPage">
            <MyButton onClick={addPost} className="TestPage__button">Add</MyButton>
            <MyButton className="TestPage__button">Load</MyButton>
            <p>Items:</p>
            {
                data.map(item => <p onClick={() => deletePost(item.id)} className="TestPage__item">{`${item.id} ${item.name}`}</p>)
            }
        </div>
    );
};

export default TestPage;