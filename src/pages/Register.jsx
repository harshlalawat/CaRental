import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register(){
    return (<>
        <Header />
        <div class="register">
        <h1 class="hed">REGISTER</h1><br />
        <form class="register_form">
            <label class="form__label">Email Id</label><br />
            <input class="form__input" type="email" placeholder="Email" autocomplete="email" /><br /><br />
            <label class="form__label">Password</label><br />
            <input class="form__input" type="password" placeholder="Password" autocomplete="current-password" /><br /><br />
            <button class="butn" >REGISTER</button><br /><br /><br />
            <p class="form__label">Already a User?
                <a href="/login" style={{color: "red"}}>LOGIN HERE</a>
            </p>
        </form>
    </div>
        <Footer />
    </>)
}

export default Register;