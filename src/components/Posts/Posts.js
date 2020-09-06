import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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

const Posts = (props) => {
    const {  id,title,body} = props.post;
    const history = useHistory();
    
    const handleClick = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }
    const postStyle = { 
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    const classes = useStyles();
    return (
        <div style={postStyle}>
            
            

            <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="h5" component="h2">
      <h3>Id: {id}</h3>
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h3>Title: {title}</h3>
        </Typography>
        
        
        <Typography variant="body2" component="p">
        <p>Body: {body}</p>
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/post/${id}`}><Button variant="contained" color="primary" onClick={() => handleClick(id)}>See more</Button></Link>
      </CardActions>
    </Card>
        </div>
    );
};

export default Posts;