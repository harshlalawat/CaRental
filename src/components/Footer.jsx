import React from "react";
import two1 from "./asset/two1.jpg";
import twitter from "./asset/twitter.png";
import facebook from "./asset/facebook.png";
import instagram from "./asset/instagram.png";
import mail from "./asset/mail.png";

function Footer(){
    return(<>
        <div class="about_div row">
        <div class="about_image_div col-4">
            <img src={two1} alt="" class="about_image" />
        </div>
        <div class="about_services_div col-4">
            <h4>SERVICES</h4>
            Self Drive<br />
            Comfort and Security<br />
            All India Permit<br />
            Special Discounts
        </div>
        <div class="about_link_div col-4">
            <h4>ABOUT</h4>
            <a href="">About Us</a><br />
            <a href="">FAQS</a><br />
            <a href="">Terms And Conditions</a>
        </div>
      </div>

    <div class="footer">
        <div class="footer_div">
            <a href="https://twitter.com/Lalawat2001"><img src={twitter} alt="twitter" /></a>
            <a href="https://www.facebook.com/harshlalawat.hl"><img src={facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/mr_lalawat_hl/"><img src={instagram} alt="instagram" /></a>
            <a href="mailto:harshlalawathlhl@gmail.com"><img src={mail} alt="mail" /></a>
        </div>
        <p class="footer-para">© Copyright CaRental</p>
    </div>
    </>)
}

export default Footer;