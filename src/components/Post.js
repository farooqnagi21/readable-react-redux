import React, {Component} from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import IconButton from '@material-ui/core/IconButton'
import CardContent from '@material-ui/core/CardContent'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import LikeIcon from '@material-ui/icons/ThumbUp'
import DislikeIcon from '@material-ui/icons/ThumbDown'
import './App.css'
import {FaGripVertical} from 'react-icons/fa'

import {decVote, incVote} from "../actions";
import {connect} from "react-redux";
import * as ProjectAPI from '../projectAPIs/ProjectAPI'

class Post extends Component{
    state={
        anchorEl:null
    }
    openMenuModal=e=>
    {
       this.setState({anchorEl: e.currentTarget})
    }
    closeMenuModal=()=>
    {
        this.setState({anchorEl:null})
    }

    componentDidMount() {
    }

    handleIncrement=(post)=> {
        console.log(post)
        this.props.increment(post)
        ProjectAPI.vote(post.id, "upVote").then()
    }
    handleDecrement=(post)=>{
        this.props.decrement(post)
        ProjectAPI.vote(post.id,"downVote").then()
    }
    render() {
        const {posts,increment,decrement,counter}=this.props
        console.log(posts)
        const{anchorEl}=this.state
        const open=Boolean(this.state.anchorEl)

        return(

            <div className="center" >
                {
                    posts.map((post)=>
                        (
                            <Card className="classes.root buttonClass">
                                <CardHeader
                                    action={
                                        <IconButton className="right"
                                                   // aria-owns={open ? 'simple-menu' : null}
                                                    //aria-haspopup="true"
                                                    onClick={this.openMenuModal}
                                                    >
                                            <FaGripVertical />
                                        </IconButton>
                                    }
                                    title={post.title}
                                    subheader={post.author}
                                />
                                <CardContent >
                                    {post.body}
                                </CardContent>
                                <div>
                                    <label className="cardlabel">Vote Score: {post.voteScore}</label>
                                    <div className="right">
                                        <label className="cardlabel">Comments:</label>
                                    </div>
                                </div>
                                <div>
                                    <IconButton onClick={()=>this.handleDecrement(post)}>
                                        <DislikeIcon/>
                                    </IconButton>
                                    <div className="left">
                                        <IconButton onClick={()=>this.handleIncrement(post)}>
                                            <LikeIcon/>
                                        </IconButton>
                                    </div>
                                </div>
                            </Card>

                        ))
                }
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={this.closeMenuModal}>
                    <MenuItem onClick={()=>(console.log("hello"))}>Edit Post</MenuItem>
                    <MenuItem onClick={()=>(console.log("hello"))}>Delete Post</MenuItem>
                </Menu>

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (post) => dispatch(incVote(post)),
        decrement: (post) => dispatch(decVote(post))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Post)





{/* {
                    posts.map((post)=>
                        (
                            <div className="post card">
                                <div className="card-content">
                                    <IconButton className="right"
                                                   // aria-owns={open ? 'simple-menu' : null}
                                                    //aria-haspopup="true"
                                                    onClick={this.openMenuModal}
                                                    >
                                            <MoreVertIcon />
                                        </IconButton>
                                    <Button className="card-title" onClick={()=>(console.log("Hello"))}>{post.title}</Button>
                                    <span className="sub-title">{post.author}</span>
                                    <CardContent >
                                        {post.body}
                                    </CardContent>
                                </div>
                            </div>
                        )
                    )
                }*/}