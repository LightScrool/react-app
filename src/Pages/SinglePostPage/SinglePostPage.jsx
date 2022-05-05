import React, {useEffect, useState} from 'react';
import "./SinglePostPage.scss";
import Container from "../../Components/UI/Container/Container";
import {useParams} from "react-router-dom";
import useFetching from "../../hooks/useFetching";
import {fetchSinglePost, fetchPostComments} from "../../data";
import Loader from "../../Components/UI/Loader/Loader";
import {getTitled} from "../../utils"
import PostComments from "../../Components/PostComments";

const SinglePostPage = () => {
    // Reading params from URL address
    const {id} = useParams();

    // Fetching post data
    const [postData, setPostData] = useState({});
    const [fetchingPostData, postDataIsLoading, postDataError] = useFetching(async (...args) => {
        const fetchedData = await fetchSinglePost(...args);
        const data = fetchedData.data ?? {};
        setPostData(data);
    });

    // Fetching post comments
    const [postComments, setPostComments] = useState([]);
    const [fetchingPostComments, postCommentsIsLoading, postCommentsError] = useFetching(async (...args) => {
        const fetchedComments = await fetchPostComments(...args);
        const comments = fetchedComments.data ?? [];
        setPostComments(comments);
    })

    useEffect(() => {
        fetchingPostData(id);
        fetchingPostComments(id);
    }, [])

    return (
        <div className="SinglePostPage">
            <Container>
                {
                    postDataIsLoading || postCommentsIsLoading
                    ?
                    <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%"}}>
                        <Loader/>
                    </div>
                    :
                    <>
                    {
                        postDataError || postCommentsError
                        ?
                        <h1 style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%"}}>
                            Ошибка, пост не найден!
                        </h1>
                        :
                        <>
                            <h1 className="SinglePostPage__title">{getTitled(postData.title)}</h1>
                            <div className="SinglePostPage__text">{getTitled(postData.body)}</div>
                            <PostComments comments={postComments}/>
                        </>
                    }
                    </>
                }
            </Container>
        </div>
    );
};

export default SinglePostPage;