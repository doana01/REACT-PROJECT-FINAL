import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {

    function hours() {
        let date = new Date(props.data.dt * 1000);

        let hours = date.getHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature} °C`;
    }

    return (
        <div className="WeatherForecastPreview col">
            {hours()}
            < WeatherIcon code={props.data.weather[0].icon} />
            { temperature()}
        </div >
    );
}