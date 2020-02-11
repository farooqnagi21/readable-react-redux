import React from "react"
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="nav-wrapper green">
            <div className="container">
                <a className="brand-logo center">ReabAble Project</a>
                <ul className="left">
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="/AddPost"> Add Post</Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar