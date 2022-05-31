import React from "react";
import logo from '../logo.svg';
import '../App.css';
const Navbar = _ => {
    return (
        <div>
            <nav className="navbar  App-link nbColor">
                <div className="container-fluid ">
                    <span className="navbar-brand mb-0 h1  ">
                        <img src={logo} className="App-logo"></img>
                        <span className="nbLetra">ReactFacts</span>
                        <span className="movColLetra">React Course - Project 1</span>
                    </span>
                </div>
            </nav>
        </div>
          
    )
}

export default Navbar;