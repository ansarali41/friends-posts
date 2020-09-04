import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const AllPost = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h1>total posts: {posts.length}</h1>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default AllPost;