import React from "react";
import {Link} from "react-router-dom";
import manual from './asset/manual.jpg';
import seat from './asset/seat.png';
import petrol from './asset/petrol.png';

const GetACar=(item)=>{

    return(
      
        <div className="element_grid">          
                         <div className="container">
                         
                <div className="upper">
                    <div className="picture">
                        <img src={item.imgsrc}  className="brand" alt="pic"></img>
                    </div>
                    <div className="details">
                        <div className="type">{item.segment}</div>
                        <div className="model">{item.brand}</div>
                        <div className="name">{item.model}</div>
                        <div className="price">Per Day <br/><span className="num">&#8377; {item.price}</span> </div>
                       <Link to="/bookingdetails"><button className="booknow">Book now</button></Link>
                    </div>
                </div>
                <div className="lower">
                    <div className="layer">
                    <div className="segment">
                        <img src={manual} className="kar" alt="pic"></img>
                     <div className="sp">{item.transmission}</div>
                    </div>
                    <div className="seats">
                        <img src={seat} className="kar" alt="pic"></img>
                        <div className="sp">{item.seats}</div>
                    </div>
                    <div className="petrol">
                        <img src={petrol} className="kar" alt="pic"></img>
                        <div className="sp">{item.engine}</div>
                    </div>
                    </div>
                </div>
            </div>
           </div>
            )
}
export default GetACar;