import './App.css'
import { useEffect } from 'react'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import image from "./assets/image.png"
import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather();
  console.log(weather)

  useEffect(() => {

    weather.fetchCurrentUserData();

  }, [])

  return (
    <>
      <div class='w-full h-screen'>
        <img class='w-full min-h-full absolute' src={image} alt="Loading...." />
        <div class='min-h-full  flex flex-col justify-center items-center relative z-20'>
          <form class="w-4/5 flex flex-col gap-7 items-center bg-white rounded-xl 
          xl:text-2xl 2xl-4xl shadow shadow-slate-700">
            <h1 class="mt-7 font-serif font-semibold italic bg-gradient-to-r from-red-600 via-green-700 to-indigo-700 inline-block text-transparent bg-clip-text">Weather Forecast</h1>
            <Input />
            <Button onClick={weather.fetchData} value="Search" />
            <Card />
            <Button
              onClick={weather.fetchCurrentUserData} value="Refresh" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
