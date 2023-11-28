import React from "react";
import { useState } from "react";

function Button(props) {
    return (
        <button className={props.className}> <a href={props.href} className="button-text" target="_blank">{props.txt}</a> </button>
    )
}

export default Button