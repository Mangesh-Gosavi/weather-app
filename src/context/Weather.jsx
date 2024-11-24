import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api/Index";

const WeatherContext = createContext(null);

export const useWeather = () =>{
    return useContext(WeatherContext)
}

export const WeatherProvider =(props) =>{
    const [data,setData] = useState(null);
    const [searchcity,setSearchcity] = useState(null);

    const fetchData = async () =>{
        const response  = await getWeatherDataForCity(searchcity);
        setData(response);
    }

    const fetchCurrentUserData = () =>{
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(  
                position.coords.latitude,
                position.coords.longitude
            ).then((data) => setData(data))
        })
    }

    return <WeatherContext.Provider value={{ searchcity, data , setSearchcity, fetchData, fetchCurrentUserData}}>
        {props.children}
    </WeatherContext.Provider>
}