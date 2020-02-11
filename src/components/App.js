import React, {Component} from 'react';
//import './App.css';
import {Route} from 'react-router'
import Home from "./Home";
import Navbar from "./Navbar"
import Router from '../Router'
import {incVote,decVote} from "../actions"
import {BrowserRouter} from "react-router-dom"
import {connect} from 'react-redux'
import Button from "@material-ui/core/Button";
import AddPost from "./AddPost";

class App extends Component{
  render(){
    return (
        <div>

            <Router/>


        </div>
    );
  }

}

export default connect()(App);
