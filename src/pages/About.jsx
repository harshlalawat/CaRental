import React from "react";
import { NavLink} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hatch from '../components/asset/cars/etiostoyota.jpg';
import sedan from '../components/asset/cars/maruticiaz.webp';
import mpv from '../components/asset/cars/innova.webp';
import suv from '../components/asset/cars/renaultduster.jpg';
import self from '../components/asset/self.jpg';
import allIndia from "../components/asset/6.png";
import comfort from "../components/asset/comfort.png";

function About(){
    return (<>
        <Header />
        <div>
        <h2 class="about_h2">ABOUT US</h2>
        </div>

        <h3 class="register_h3" > <NavLink to="/register"><strong>REGISTER</strong></NavLink>  OR <NavLink to="/login"><strong>LOGIN</strong></NavLink> TO BOOK YOUR CAR!!!!!!</h3>

        <div class="about_us_content_div">
            <p class = "about_us_content">GET YOUR'S is a newly established self drive car rental service launched by young businessmen who are in such services since many years abroad. As a successful service abroad, the motive is to bring the same concept in India and get people drive miles with their personal space and freedom in convenient and luxurious manner. We at GET YOUR'S, carry a concept of farsighted visuality that will help the travel industry attain another level of comfort and secure zone. Our target is to make you feel happy and free when you drive. At GET YOUR'S, you can hire a perfect car that matches your need for short or long term duration. Whether you wish to spend the day shopping, or a luxury car for a Corporate events, for business travel or weekend trips, GET YOUR'S will adapt to your exact needs with the best quality.</p>
        </div>

        <div>
            <h2 class="about_h2 gallery">GALLERY</h2>
        </div>

        <div class="row about_us_images_div">
            <div class="about_us_image_div col-lg-6">
                <img class="about_us_image" src={hatch} alt="" />
                <h3 class="about_image_h3">Hatchback</h3>
            </div>
            <div class="about_us_image_div col-lg-6">
                <img class="about_us_image" src={sedan} alt="" />
                <h3 class="about_image_h3">Sedans</h3>
            </div>
            <div class="about_us_image_div col-lg-6">
                <img class="about_us_image" src={mpv} alt="" />
                <h3 class="about_image_h3">MPV</h3>
            </div>
            <div class="about_us_image_div col-lg-6">
                <img class="about_us_image" src={suv} alt="" />
                <h3 class="about_image_h3">SUV</h3>
            </div>
        </div>

        <div>
            <h2 class="about_h2 services_offered">SERVICES OFFERED</h2>
        </div>

        <div class="row features_div">
            <div class="col-lg-4 box">
                <img src={self} alt="" class="feature_image" />
                <h6 class="feature_h6">Self Drive Car Rental</h6>
            </div>
            <div class="col-lg-4 box">
                <img src={allIndia} alt="" class="feature_image" />
                <h6 class="feature_h6">All India Permit</h6>
            </div>
            <div class="col-lg-4 box">
                <img src={comfort} alt="" class="feature_image" />
                <h6 class="feature_h6">Comfortability and Security</h6>
            </div>
        </div>
        <Footer />
    </>)
}

export default About;