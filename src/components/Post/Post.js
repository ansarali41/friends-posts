import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px',
    boxShadow: '5px 5px 10px lightGray'
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
    const { title, body } = props.post;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary">See more</Button>
          </CardActions>
        </Card>
    ); 
};

export default Post;
// (
    //     <div>
    //         <h3>title:{title}</h3>
    //         <p>post: {body}</p>
    //         <Button variant="contained" color="primary">See more</Button>
    //     </div>
    // );