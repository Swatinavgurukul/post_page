import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contributions: {
        "nameValuePairs": [
          {
            "name": 'Kritika',
            "time_subheader": "September 14, 2016",
            "pro_img": require("./img/kriitk gg.jpg"),
            "user_avatar": "K",
            "img": require("./img/kk5.jpeg"),
          },
          {
            "name": 'Poonam',
            "time_subheader": "September 7, 2020",
            "pro_img": require("./img/pooman.png"),
            "user_avatar": "P",
            "img": require("./img/poo.jpeg"),
          },
          {
            "name": 'Swati',
            "time_subheader": "September 5, 2019",
            "pro_img": require("./img/swati1.jpeg"),
            "user_avatar": "S",
            "img": require("./img/swati2.jpeg"),
          },
          {
            "name": 'Rabiya',
            "time_subheader": "August 28, 2018",
            "pro_img": require("./img/rabiya1.jpeg"),
            "user_avatar": "R",
            "img": require("./img/rabbu1.jpeg"),
          },
          {
            "name": 'Rinki',
            "time_subheader": "June 21, 2015",
            "pro_img": require("./img/rinku1.jpeg"),
            "user_avatar": "R",
            "img": require("./img/rinku.jpeg"),
          },
        ]
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" style={{backgroundColor:"pink",marginBottom:10}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
           Friends
          </Typography>
        </Toolbar>
      </AppBar>
        <Container maxWidth="sm">
 
          {this.state.contributions.nameValuePairs.map((item) =>
            <Card style={{maxWidth: 345}} style={{ marginBottom: 10 }}>
              <CardHeader
                // avatar={
                //   <Avatar aria-label="recipe" style={{ backgroundColor: "red" }}>
                //     {item.user_avatar}
                //     {/* {item.img} */}
                //   </Avatar>
                // }
                avatar={<img src={item.img} alt="Avatar" style={{height:56,width:56,borderRadius:28}} />}
                

                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.name}
                subheader={item.time_subheader}
              />
              <CardMedia style={{height: 400,paddingTop: 56.25}}
                image={item.pro_img}
                title="Paella dish"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="comment">
                  <CommentIcon />
                </IconButton>
              </CardActions>
            </Card>
          )}
        </Container>
      </React.Fragment>
    );
  }
}
export default App;


