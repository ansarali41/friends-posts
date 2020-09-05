import React from 'react';
import './Comments.css'

const Comments = (props) => {
    const { name, body } = props.comment;
    const{totalComments }=props;

    return (
        <div className="single-comment-container">
            <div className="comment-image">
                <img src="" alt="" />
                <h1>{totalComments}</h1>
            </div>

            <div className="comment-details">
                <h3>{name}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comments;