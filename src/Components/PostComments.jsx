import React from 'react';
import "../styles/PostComments.scss";
import {getTitled} from "../utils"

const PostComments = ({comments}) => {
    return (
        <ul className="PostComments">
            <h1 className="PostComments__title">Комментарии</h1>
            {comments.map(comment => {
                return(
                    <li className="PostComment" key={comment.id}>
                        <div className="PostComment__e-mail">
                            E-mail: {comment.email}
                        </div>
                        <div className="PostComment__text">
                            Комментарий:
                            <p>{getTitled(comment.body)}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default PostComments;