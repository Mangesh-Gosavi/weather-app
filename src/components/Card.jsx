import React from "react";
import { useWeather } from "../context/Weather";

const Card = () =>{
    const weather = useWeather();

    return(
        <div class="flex flex-col text-center items-center xl:text-2xl 2xl-4xl">
            <img class='size-16' src={weather.data?.current?.condition?.icon} alt="Loading"/>
            <h2>{weather.data?.current?.temp_c} C</h2>
            <h2>{weather.data?.location?.name}, {weather.data?.location?.region} {weather.data?.location?.country}</h2>
        </div>
    )
}

export default Card