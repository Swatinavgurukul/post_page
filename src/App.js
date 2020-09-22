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
import logo from './img/morning.jpeg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            text: '',
            video: null,
            name: 'Abhi Gupta',
            contributions: {
                "nameValuePairs": [
                    {
                        "name": 'Swati',
                        "time_subheader": "September 5, 2019",
                        "pro_img": require("./img/swati1.jpeg"),
                        "user_avatar": "S",
                        "img": require("./img/swati2.jpeg"),
                    },
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

    handleFileChange = e => {
        this.setState({ file: e.target.files[0] });
    };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    handleVideoChange = e => {
        this.setState({ video: e.target.value });
    };
    fileData = () => {
        console.log(this.state.file, "wertyui")
        if (this.state.file) {
            return (
                <div>
                    <img style={{ height: 400, paddingTop: 56.25 }} src={this.state.file} />
                </div>
            )
        } else if (this.state.video) {
            return (<div>
                {/* <video width="320" height="240" controls>
                    <source src={this.state.video} type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                            Your browser does not support the video tag.
                </video> */}
            </div>)
        }
        else {
            return (<div><h4>Choose before Pressing the Upload button</h4></div>)
        }
    }
    render() {
        console.log(this.state.text, "swa")
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" style={{ backgroundColor: "pink", marginBottom: 10 }}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Friend
          </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm">
                    <Grid container style={{ flexGrow: 1, marginTop: 15, marginBottom: 5 }} spacing={2}>
                        <Grid item xs={2} style={{ textAlign: "center" }}>
                            <img style={{ height: 50, width: 50, borderRadius: 25 }} src={logo} />
                        </Grid>
                        <Grid item xs={4}>
                            <h2>{this.state.name}</h2>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "center", marginTop: 15 }}>
                            {/* <Button onClick={this.fileData} variant="contained">Upload Pic!</Button> */}
                        </Grid>
                    </Grid>
                    <TextField style={{ width: 553, marginBottom: 26 }} id="outlined-basic" label="Text" variant="outlined" onChange={this.handleChange} />
                    <div>
                        <input type="file" onChange={this.handleFileChange} />
                        <Button onClick={this.fileData} variant="contained">Upload Pic!</Button>
                    </div>
                    {this.state.text ? <Card style={{ maxWidth: 345 }} style={{ marginBottom: 10, padding: 12 }}><p>{this.state.text}</p></Card> : ""}

                    {this.state.contributions.nameValuePairs.map((item) =>
                        <Card style={{ maxWidth: 345 }} style={{ marginBottom: 10 }}>
                            <CardHeader
                                avatar={<img src={item.img} alt="Avatar" style={{ height: 56, width: 56, borderRadius: 28 }} />}
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={item.name}
                                subheader={item.time_subheader}
                            />
                            <CardMedia style={{ height: 400, paddingTop: 56.25 }}
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


