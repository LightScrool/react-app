import React, {useState} from 'react';
import '../styles/AddPostForm.scss';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {addPostAction} from "../store/postsReducer";

const AddPostForm = () => {
    const posts = useSelector(state => state.postsReducer.posts);
    const dispatch = useDispatch();
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const AddPost = (event) =>{
        event.preventDefault();

        let postId = Date.now();

        while (posts.some(post => post.id === postId)){
            postId++;
        }

        const post = {
            id: postId,
            title: postTitle,
            body: postBody
        }
        dispatch(addPostAction(post));

        setPostBody('');
        setPostTitle('');
    }

    return (
        <form className="AddPostForm">
            <MyInput
                className="AddPostForm__Input"
                placeholder="Введите заголовок..."
                onChange={event => setPostTitle(event.target.value)}
                value={postTitle}
            />
            <MyInput
                className="AddPostForm__Input"
                placeholder="Введите текст поста..."
                onChange={event => setPostBody(event.target.value)}
                value={postBody}
            />
            <MyButton className="AddPostForm__Button" onClick={AddPost}>Создать пост</MyButton>
        </form>
    );
};

export default AddPostForm;