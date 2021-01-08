import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY_DAY",
        "03n": "CLOUDY_NIGHT",
        "04d": "PARTLY_CLOUDY_DAY",
        "04n": "PARTLY_CLOUDY_NIGHT",
        "09d": "RAINY",
        "09n": "RAINY",
        "10d": "SLEET",
        "10n": "SLEET",
        "11d": "WIND",
        "11n": "WIND",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    };

    return (
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="rgb(247,247,247)"
            size={45}
            animate={true}
        />
    );
}
