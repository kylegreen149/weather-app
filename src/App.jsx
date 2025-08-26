import { useState } from 'react'
import "./index.css"
import axios from 'axios'
import Search from './Search'

function App() {
  const [clicked, setClicked] = useState(false)
  const [data, setData] = useState(null)
  const [location, setLocation] = useState("")
  

  const handleChange = (e) => {
    console.log(e.target.value)
    setLocation(e.target.value)
  }

  const handleSubmit = (e, location) => {
    e.preventDefault()

    setClicked(true)
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Using import.meta to support Vite
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`

    axios
      .get(baseURL)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.error("Weather fetch failed:", err))
  }
  
  return (
    <div>
      <Search location={location} handleChange={handleChange} handleSubmit={(e) => handleSubmit(e, location)}/>
      {data && (
        <p>
          {data.main ? `${data.name}: ${Math.round(data.main.temp)}°F, with ${data.weather[0].main} skies. The wind speed is ${Math.round(data.wind.speed)} mph` : "Loading..."}
        </p>
      )}

    </div>
  )
}

export default App
