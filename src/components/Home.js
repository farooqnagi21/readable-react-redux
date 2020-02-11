import React, {Component} from "react"
import Navbar from "./Navbar"
import Post from "./Post"
import * as ProjectAPI from '../projectAPIs/ProjectAPI'
import {addData, decVote, incVote} from "../actions";
import {connect} from "react-redux";



class Home extends Component{
    state={
        posts:[]
    }
    componentDidMount() {
        console.log("did mount")

        ProjectAPI.getAll().then(res => {
            this.props.addData(res)
    })}

    render() {
       // console.log(this.state.posts)
        const{increment,decrement,getpost,addData}=this.props
        //console.log(this.props)
        return(
            <div>
                <Navbar/>
                <Post posts={getpost}></Post>
            </div>
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
        increment: () => dispatch(incVote()),
        decrement: () => dispatch(decVote()),
        addData: (post) => dispatch(addData(post)) //add data of posts
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default Home