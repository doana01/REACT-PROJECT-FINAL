import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

            <h1> {props.data.city}</h1>

            <ul>
                <li className="coord"><span>Lat: {Math.round(props.data.lat)}</span> / <span> Lon: {Math.round(props.data.lon)}</span>
                </li>
                <li className="date">
                    <FormatDate date={props.data.date} />
                </li>
            </ul>

            <ul>
                <li className="text-capitalize"> {props.data.description} </li>
            </ul>

            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} alt={props.data.description} />
                        </div>
                        <div className="float-left">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <ul>
                        <li>Humidity:  {props.data.humidity} %</li>
                        <li>Wind: {props.data.wind} km/h</li>
                        <li> Atm Pressure: {props.data.pressure} hPa</li>
                    </ul>
                </div>
            </div>
        </div >
    );
}