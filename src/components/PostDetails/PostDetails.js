import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



const useStyle = makeStyles({
    root: {
      minWidth: 275,
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
     
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      
    },
    
  }));


const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
   
    const classes = useStyles();

    return (
 
<Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="body2" component="p">
      Post Detail of Component: {postId}      
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h3>Title: {post.title}</h3>
        </Typography>   
        <Typography variant="body2" component="p">
        Body: {post.body}  
        </Typography>
     
       
             <h3>Comments  :  {comments.length}</h3>
             {
                comments.map(comment => <Comments comment={comment}></Comments>)
             }
               
             </CardContent>
         </Card>
        
    );
};

export default PostDetail;