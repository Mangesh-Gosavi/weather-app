import './App.css'
import { useEffect } from 'react'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import image from "./assets/image.png" 
import { useWeather } from './context/Weather'

function App() {
  const weather =  useWeather();
  console.log(weather)

  useEffect(() => {

    weather.fetchCurrentUserData();

  },[])

  return (
    <>
     <div className='body'>
       <img className='backimage' src={image} alt="Loading...." />
      <div className='App'>
        <h1>Weather Forecast</h1>
        <Input/>
        <Button onClick={weather.fetchData} value="Search"/>
        <Card/>
        <Button onClick={weather.fetchCurrentUserData} value="Refresh"/>
      </div>
     </div>

    </>
  )
}

export default App
