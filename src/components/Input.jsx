import React from "react";
import { useWeather } from "../context/Weather";

const Input = () =>{
    const weather =  useWeather();

 
    return(
        <input 
        className="input-field"
        placeholder="Search Here"
        value={weather.searchcity}
        onChange={(e) => weather.setSearchcity(e.target.value)}
        />
    )
}

export default Input