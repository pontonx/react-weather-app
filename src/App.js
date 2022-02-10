  import Header from "./components/Header";
import Search from "./components/Search";
import Weather from "./components/Weather";

import { useState } from 'react'

function App() {

  const [city, setCity] = useState('')
  const [degree, setDegree] = useState('')
  const [clouds, setClouds] = useState('')
  const [weathericon, setWheatherIcon] = useState('')

  const fetchTasks = async (miasto) => {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+miasto+"&appid=31aabde6ba81242a9b7511f3b4e5d855&units=metric")
    const data = await res.json()

    if(data.cod === "404") {
      setCity(data.message)
    } else {
      console.log(data)
      setCity(data.name + ", " + data.sys.country)
      setDegree(data.main.temp)
      setClouds(data.weather[0].main)
      setWheatherIcon(data.weather[0].icon)
    }
  }

  return (
    <div className="App">
      <Header />
      <Search onChange={event => fetchTasks(event.target.value)} />
      {city !== "city not found" && city ? <Weather city={city} degree={degree} clouds={clouds} weathericon={`http://openweathermap.org/img/wn/${weathericon}@2x.png`} /> : <Weather city="City not found" degree={0}/>}
    </div>
  );
}

export default App;
