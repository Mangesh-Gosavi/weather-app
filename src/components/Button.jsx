import React from "react";

const Button = (props) =>{

    return(
        <button class='text-sm xl:text-2xl 2xl-2xl bg-green-500 p-5 
        rounded-lg mb-7 hover:scale-105 transition duration-1000' onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Button