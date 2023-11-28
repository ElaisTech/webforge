import React from "react";
import { useState } from "react";


function SectionPicAndSection(props) {
   
    return (
        <div className={props.className}>
            <img src={props.src} alt={props.alt} className={props.imgClassName}/>
            <h2 className="wrapped-text">{props.text}</h2>
        
        </div>
    )
}

export default SectionPicAndSection