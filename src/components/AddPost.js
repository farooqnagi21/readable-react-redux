import React, {Component} from 'react'
import './App.css'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select";
import {InputLabel} from "@material-ui/core";
import * as ProjectAPI from '../projectAPIs/ProjectAPI'
import serializeForm from 'form-serialize'
import {addPost} from "../actions";
import {connect} from "react-redux";
import Navbar from "./Navbar";

class AddPost extends Component{
    state={
        categories:[],
        post:{
            id:null,
            title:null,
            author:null,
            body:null,
            category:null,
            timestamp:null,
            voteScore:1,
            deleted:false
        }
    }
    componentDidMount() {
        {
            ProjectAPI.getCategories().then(res => {
                console.log(res)
                this.setState({categories:res})
            })}
    }
    handleSubmit=(e)=>
    {
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        console.log(values)
        values.id=Math.random()
        values.timestamp=Date.now()

        //console.log(values)
        this.setState({post:values},()=>{console.log(this.state.post)
            ProjectAPI.addPost(this.state.post).then(res=>{this.props.addPost(res)})})
        this.props.history.push('/');
       //this.pageRedirect()


    }

    pageRedirect=()=>{
        //debugger
        this.props.history.push('/');
        //return <Link to="/"/>
    }
    handleDiscard=()=>{
        //debugger
        return <Link to="/"/>
    }
    render() {
        const{categories}=this.state

        return(
            <div>
                <Navbar/>
                <form className="formAddPost" onSubmit={this.handleSubmit.bind(this)}>
                    <label className="label">Author Name:</label>
                    <input placeholder="Author Name" id="author" name="author" type="text"></input>
                    <label className="label">Title:</label>
                    <input placeholder="Title of Post" id="title" name="title" type="text"></input>
                    <div >
                        <InputLabel className="label">Choose Category of your Post:
                            <Select  id="category" name="category">
                                <option value="move" disabled>Category...</option>
                                <option value="react" selected>React</option>
                                <option value="redux">Redux</option>
                                <option value="udacity">Udacity</option>
                            </Select>
                        </InputLabel>
                    </div>

                    <label className="label">Description:</label>
                    <textarea placeholder="Body of Post" id="body" name="body"></textarea>

                    <Button type="submit"
                            className="buttonClass"
                            variant="contained"
                            color="primary" >Post</Button>
                    <Link to="/"
                            className="buttonClass"
                            variant="contained"
                            color="secondary">Discard</Link>

                </form>
            </div>
           /* <form >
                <label>Choose Category of your Post:
                    <Select value="card">
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </Select>
                </label>
            </form>*/

        )
    }
}

const mapStateToProps = (state) => {
    return {
        getpost: state.post
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post)) //add a single post to store
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost)

//export default AddPost