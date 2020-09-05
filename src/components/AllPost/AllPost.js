import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import "./AllPost.css"
import { Grid } from '@material-ui/core';

const AllPost = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])
    return (
        <Grid container className="single-post">
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </Grid>
    );
};

export default AllPost;