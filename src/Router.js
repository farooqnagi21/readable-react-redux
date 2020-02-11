import React, {Component} from 'react'
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddPost from "./components/AddPost";

class Router extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route exact path="/" render={()=> <Home/>} />
                    <Route path="/AddPost" render={()=> <AddPost/>} />
                </BrowserRouter>
            </div>
        )
    }

}

export default Router