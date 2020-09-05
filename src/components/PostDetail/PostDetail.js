import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./PostDetail.css"
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const { postId } = useParams();
    // post api fetch section
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    const { title, body } = post;

    //  comments api fetch section
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [])

    // random user image api fetch section
    const[users,setUsers] = useState([])
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=30`)
        .then(response => response.json())
        .then(data => console.log(data.results));
    },[])

    return (
        <div className="postComment-container">
            <div className="postDetail-container">
                <p>post detail id: {postId}</p>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>

            <div className="comments-container">
                <h2>total comments: {comments.length}</h2>
                {
                    comments.map(comment => <Comments comment={comment} totalComments={comments.length} key={comment.id}></Comments>)
                }
            </div>
        </div>
    );
};

export default PostDetail;