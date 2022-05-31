import React from "react";
import meme from '../meme.jpg';
import '../App.css';
const Navbar = _ => {
    return (
        <div>
            <nav className="navbar  App-link nbColor">
                <div className="container-fluid ">
                    <span className="navbar-brand mb-0 h1  ">
                        <img src={meme} className="App-logo"></img>
                        <span className="nbLetra">Meme generator</span>
                        <span className="movColLetra">React Course - Project 1</span>
                    </span>
                </div>
            </nav>
        </div>
          
    )
}

export default Navbar;