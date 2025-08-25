import { useState } from 'react'
import "./index.css"
import axios from 'axios'
import Search from './Search'

function App() {
  const [clicked, setClicked] = useState(false)
  const [data, setData] = useState([])
  const [location, setLocation] = useState("")
  const getWeather = (location) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Using import.meta to support Vite

    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`

    axios
      .get(baseURL)
      .then(res => {
        // console.log(res.data)
        setData(res.data)
      })

  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setLocation(e.target.value)
  }

  
  return (
    <div>
      <Search location={location} handleChange={handleChange} />
    </div>
  )
}

export default App
