import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.prevenDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.prevenDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                <span className="temperature"> {Math.round(props.celsius)} </span>
                <span className="unit">
                    °C  |{" "}
                    <a href="/" onClick={showFahrenheit}>
                        °F
                        </a>
                </span>
            </div>
        );
    } else {

        let fahrenheit = (props.celsius * 9) / 5 + 32;

        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit())}</span>
                <span className="unit">
                    <a href="/" onClick={showCelsius}>
                        °C
                         </a> {" "}
                          |  °F
                </span>
            </div>
        );
    }
}

