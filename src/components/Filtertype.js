import React, { useState } from "react";
import "./Filtertype.css";
import Cardata from "./Cardata";
import GetACar from "./GetACar";
const Filtertype=()=>{
    const[items,setItems]=useState(Cardata);

const ncard=(val)=>{
    return(
    <GetACar
    id={val.id}
    imgsrc={val.imgsrc} 
    segment={val.segment}
    brand={val.brand}
    model={val.model}
    price={val.price}
    transmission={val.transmission}
    seats={val.seats}
    engine={val.engine}/>
    )
}
    return(
        <>
            <div className="element_grid">
            { items.map(ncard)} 
            </div>
        </>
    );
}
export default Filtertype;