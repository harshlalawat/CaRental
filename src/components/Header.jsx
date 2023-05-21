import React from "react";
import { NavLink} from "react-router-dom";
import logo from "./asset/flogo.png";

function Header(){
    return(
        <>
            <div class="divFirst">
        <nav class="navbar navbar-dark navbar-expand-lg">
            <div>
                <a href="index.html"><span class="icon">CaRental</span></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="#navbarToggler">
                <NavLink className = "navButton nav-link active" to="/">Home</NavLink>
                <NavLink className = "navButton" to="/gallery">Gallery</NavLink>
                <NavLink className = "navButton" to="/contact">Contact</NavLink>
                <NavLink className = "navButton" to="/login">Login</NavLink>
                <NavLink className = "navButton" to="/register">Register</NavLink>
                <NavLink className = "navButton" to="/about">About</NavLink>
            </div>
        </nav>
        <div>
            <img class="basic_icon" src={logo} alt="" />
            <h3 class="basic_icon_h3">GET YOUR'S</h3>
        </div>
    </div>
        </>
    )
}

export default Header;