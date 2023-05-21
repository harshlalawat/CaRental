import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact(){
    return (<>
        <Header />
        <div class="form_data">
            <form class="" method="POST">
                <div class="us">CONTACT US</div>
                <div class="username">
                    <label class="input_label">Name</label><br />
                    <input class="input_area" type="text" name="username" placeholder="Username" value="" />
                </div>
                <p class="form_para"></p>
                <div class="email">
                    <label class="input_label">Email</label><br />
                    <input class="input_area" type="text" name="email" placeholder="Email" value="" />
                </div>
                <p class="form_para"></p>
                <div class="mobile_no">
                    <label class="input_label">Mobile No</label><br />
                    <input class="input_area" type="text" name="mobileno" placeholder="Mobile No" value="" />
                </div>
                <p class="form_para"></p>
                <div class="feedback">
                    <label class="input_label">Feedback or Query</label><br />
                    <textarea class="form_textarea" name="feedback" placeholder="Ask or Say Anything!!"></textarea>
                </div><p class="form_para"></p>
                <button class="querybtn" fdprocessedid="s8jn0a">Send</button><br /><br />
                <p></p>
            </form>
        </div>
        <Footer />
    </>)
}

export default Contact;