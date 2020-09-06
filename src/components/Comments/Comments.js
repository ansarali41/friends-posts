import React from 'react';
import './Comments.css'
import FakePhoto from './../../FakePhoto/userPhoto'

const Comments = (props) => {
    const { name, body,email } = props.comment;

    const randomPhoto=Math.floor( Math.random() * ( 10 + 1 ) );
    const photo = FakePhoto.find(pic => pic.id === randomPhoto);
    
    return (
        <div className="single-comment-container">
            <div className="comment-image">
                <img src={photo.picture} alt="" />
            </div>

            <div className="comment-details">
                <h3>{name}</h3>
                <p><small>email: {email}</small></p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comments;