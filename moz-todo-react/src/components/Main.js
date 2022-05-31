import React from "react";
import logo from '../logo.svg';
import '../App.css';
const Main = _ => {
    return (
        <div>
            <h1 className="mt-5 movh1">Fun facts about React</h1>
            <div className="row ">
                <div className="col-5 mt-5" id="div1">
                    <ul id="movList" >
                        <li><div className="colWhite">Was first released in 2013</div></li>
                        <li className="mt-2"><div className="colWhite">Was originally created by Jorda Walke</div></li>
                        <li className="mt-2"><div className="colWhite">Has Well over 100k stars on GitHub</div></li>
                        <li className="mt-2"><div className="colWhite">Is maintained by Facebook</div></li>
                        <li className="mt-2"><div className="colWhite">Powers thousands of enterprise apps, including <br></br> mobile apps</div></li>

                    </ul>
                </div>
                <img src={logo} className="col-3" id="editIcon" ></img>
            </div>
        </div>
    )
}

export default Main;