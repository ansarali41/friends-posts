import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./PostDetail.css"
import Comments from '../Comments/Comments';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, CardHeader, Avatar, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: '10px',
    padding: '10px',
    backgroundColor: '#242526',
    color: 'white'
  },
  media: {
    height: 140,
  },
});

const PostDetail = () => {
    const { postId } = useParams();

    const classes = useStyles();
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

    return (
        <Grid container direction="column" justify="center" alignItems="center" className="postComment-container">
            
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                        </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings" style={{color:"white"}}>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
                    title="Paella dish"
                />
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="body-container">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                
                <CardActions>
                    <IconButton aria-label="add to favorites" style={{color:"#FF0000"}}>
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{color:"white"}}>
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>

            <div className={classes.root}>
                <h2>Total Comments : {comments.length}</h2>
                {
                    comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
                }
            </div>
        </Grid>
    );
};

export default PostDetail;