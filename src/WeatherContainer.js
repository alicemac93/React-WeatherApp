import React from "react";

const styles = {
    position: "absolute",
    top: "65%",
    borderRadius: "12.5px",
    backgroundColor: "white",
    padding: "20px 50px",
    textAlign: "center",
    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
}

function WeatherContainer(props) {

const iconurl = `http://openweathermap.org/img/w/${props.weather.icon}.png`;

return (
    <div style={styles}>
    <img src={iconurl}/>
    <p>{props.weather.location}</p>
    <p>{props.weather.temperature} °C and {(props.weather.description).toLowerCase()}</p>
    </div>
)}

export default WeatherContainer;