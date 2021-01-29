import './App.css';
import React, {useState, useEffect} from "react";
import WeatherContainer from "./WeatherContainer";

const APIkey = "";

function App() {
  const [place, setPlace] = useState("")
  const [weather, setWeather] = useState({
    location: "",
    temperature: "",
    description: "",
    icon:"",
  });

  // add local storage?? so that it remembers what was the last searched place

  const getWeather = async() => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${APIkey}`);
    if (response.ok){
      const data = await response.json();
      setWeather({location: data.name,
                  temperature: data.main.temp,
                  description: data.weather[0].main,
                  icon: data.weather[0].icon});
    }
  } catch (error) {
      console.log(error);
  }
}
  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  }
  const handleChange = (e) => {
    setPlace(e.target.value)
  }

  return (
    <div className="App">
    <header>    
    <h1>How is the weather now in </h1> 
    <input 
    onChange={handleChange}
    />
    <h1>?</h1>
    </header>
    <button 
    onClick={handleSubmit}>Show me</button>
    {(place !== weather.location || !place)? null :
    <WeatherContainer 
      weather={weather}
    />}
    </div>
  );
}

export default App;
