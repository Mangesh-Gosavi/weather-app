const baseUrl = "https://api.weatherapi.com/v1/current.json?key=644f5640c66e496cae445300241407"

export const getWeatherDataForCity = async(city) =>{

    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataForLocation = async(lat,long) =>{

    const response = await fetch(`${baseUrl}&q=${lat},&q=${long}&aqi=yes`);
    return await response.json();
};