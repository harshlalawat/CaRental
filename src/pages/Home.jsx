import React from "react";
import { NavLink} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hatch from '../components/asset/cars/etiostoyota.jpg';
import sedan from '../components/asset/cars/maruticiaz.webp';
import mpv from '../components/asset/cars/innova.webp';
import suv from '../components/asset/cars/renaultduster.jpg';
import f1 from "../components/asset/1.png";
import f2 from "../components/asset/2.png";
import f3 from "../components/asset/3.jpg";
import f4 from "../components/asset/4.png";
import f5 from "../components/asset/5.png";
import f6 from "../components/asset/6.png";

function Home(){
    return (<>
        <Header />
        <h3 class="register_h3" > <NavLink to="/register"><strong>REGISTER</strong></NavLink>  OR <NavLink to="/login"><strong>LOGIN</strong></NavLink> TO BOOK YOUR CAR!!!!!!</h3>

    <div class="divInfo">
        <h4 class="info_h4">WELCOME TO GET YOUR'S! A self drive rental service that will take you anywhere you wish to go in your own style. We at GET YOUR'S is an enthusiastic team that is heartedly focused to evolve the way you move around places in your choice of car that suits your style. GET YOUR'S gives you a convenient way to drive with your freedom and personal space. Whether you are a youth or a family person, a business man and a rough and tough traveler, its time to embellish your driving experience with U Drive!</h4>
    </div>

    <div>
        <h2 class="match_h2">CARS THAT MATCH YOUR STYLE</h2>
    </div>

    

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" data-interval = "1000" data-ride = "carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row youthful_div">
                <div class="col-6 carousel-inner-div">
                    <div><h3 class="carousel_h3">Youthful Hatcbacks</h3></div>
                    <div class="carousel_text">A day out with friends or a date with someone special, a road trip dream or a shopping trip, we have got fast and hassle free hatchbacks for all your plans. So, no need to carry heavy bags around or wait for taxi on the road side. It is the time to go for your most memorable rides in a convenient way in our self drive Youthful Hatchbacks. For all the young car lovers, you can now drive around in our Youthful Hatchbacks for your sheer indulgence and bliss whenever you wish to. How cool is that? Moreover it's also a fantastic value of money! So, go explore with GET YOUR'S!</div>
                </div>
                <div class="col-6 carousel-inner-div">
                    <img class="carousel_image" src={hatch} alt=""/>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row youthful_div">
                <div class="col-6 carousel-inner-div">
                    <div><h3 class="carousel_h3">High-End Sedans</h3></div>
                    <div class="carousel_text">These cars have been specially categorized for corporate sector. For all your corporate needs including business travel, corporate events, corporate parties, client entertaining and many more, we guarantee you the professionalism and first-class experience. We at GET YOUR'S understand the corporate sector well. We value our clients and discern their needs and so we have come up with the cars that suit your needs well. Whether to pick up a client from airport, on a meeting on the way, our self drive High-end Sedans will solve your purposes. We also have the best corporate packages to provide the client with excellence and premium service. So, take care of your work while we take care of your ride.</div>
                </div>
                <div class="col-6 carousel-inner-div">
                    <img class="carousel_image" src={sedan} alt=""/>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row youthful_div">
                <div class="col-6 carousel-inner-div">
                    <div><h3 class="carousel_h3">Astonishing MPV's</h3></div>
                    <div class="carousel_text">Parties, social events, weddings, festivals or any occasion that calls for transport, we have now got you the right choice of self drive cars for all your special days. Your family occasions should be the memorable days to cherish forever, and every part of the day should be special, including the transportation. You can now have the best of time with our self drive Astonishing MPV's. Whether you want to visit your loved ones or for big occasions when you want a car right outside your house for a few days, hire a GET YOUR'S Distinct Sedan to drive hassle free and reach your destination with elegance and sophistication.</div>
                </div>
                <div class="col-6 carousel-inner-div">
                    <img class="carousel_image" src={mpv} alt=""/>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row youthful_div">
                <div class="col-6 carousel-inner-div">
                    <div><h3 class="carousel_h3">Tough and Off-Road SUV's</h3></div>
                    <div class="carousel_text">For all the riders who like to live large and ride big, GET YOUR'S has got the most plushy and luxuriant self drive SUVs and MUVs. Whether you are a adventurous group who loves to drive to mountains, deserts or snowy places; or a big family that likes to ride together, U Drive has now got the most comfortable self drive SUVs and MUVs to seat up all of you together in style so that no one misses out the fun. GET YOUR'S Tough and Off-Road self drive vehicles are a cool way to get around for short and long distance. So, its your time to get behind the wheel and go places in swanky GET YOUR'S SUVs and MUVs. Call us now to Ride and Rejoice with GET YOUR'S!</div>
                </div>
                <div class="col-6">
                    <img class="carousel_image" src={suv} alt=""/>
                </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="row features_div">
        <div class="col-lg-4 box">
            <img src={f1} alt="" class="feature_image"/>
            <h6 class="feature_h6">Affordable Price Guarantee</h6>
        </div>
        <div class="col-lg-4 box">
            <img src={f2} alt="" class="feature_image"/>
            <h6 class="feature_h6">24 X 7 dedicated Assistance and Support System</h6>
        </div>
        <div class="col-lg-4 box">
            <img src={f3} alt="" class="feature_image"/>
            <h6 class="feature_h6">Variety of Options Available</h6>
        </div>
        <div class="col-lg-4 box">
            <img src={f4} alt="" class="feature_image"/>
            <h6 class="feature_h6">Special Discounts on Occassions</h6>
        </div>
        <div class="col-lg-4 box">
            <img src={f5} alt="" class="feature_image"/>
            <h6 class="feature_h6">Premium Quality of Cars</h6>
        </div>
        <div class="col-lg-4 box">
            <img src={f6} alt="" class="feature_image"/>
            <h6 class="feature_h6">All India Permit</h6>
        </div>
      </div>
    <Footer />
    </>)
}

export default Home;