import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import "./Post.css"
import { CardMedia, CardHeader, Avatar, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px',
    padding: '10px',
    backgroundColor: '#242526',
    color: 'white'
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
  const { title, body, id } = props.post;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {title[0]}
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
        <Link to={`/postDetail/${id}`} className="seeMore-btn"> <Button size="small" variant="contained" color="primary">See more</Button></Link>
        <IconButton aria-label="add to favorites" style={{color:"#FF0000"}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{color:"white"}}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;