import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login(){
    return (<>
        <Header />
        <div className="login">
        <h1 className="log">LOGIN</h1>
        <form className="content">
            <br />
            <label className="itm">LOGIN ID</label><br />
            <input className="inp" type="email" placeholder="Email" autocomplete="email" /><br /><br />
            <label className="itm">PASSWORD</label><br />
            <input className="inp" type="password" placeholder="Password" autocomplete="current-password" /><br /><br />
            <button className="butn" >Login</button><br /><br />
            <p className="itm">New User?
                <a href="/register" style={{color: "red"}}>REGISTER HERE</a>
            </p>
        </form>
    </div>
    <Footer />
    </>)
}

export default Login;