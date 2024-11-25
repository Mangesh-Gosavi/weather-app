import React from "react";
import { useWeather } from "../context/Weather";

const Input = () =>{
    const weather =  useWeather();

 
    return(
        <input 
        class="border-2 border-gray-500 rounded-lg h-10 w-3/6 text-center"
        placeholder="Search Here"
        value={weather.searchcity}
        onChange={(e) => weather.setSearchcity(e.target.value)}
        />
    )
}

export default Input