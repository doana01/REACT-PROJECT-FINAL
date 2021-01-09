import React from "react";

export default function FormatDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let datenow = props.date.getDate();
    let year = props.date.getFullYear();

    let hours = props.date.getHours();
    if (hours < 10) {
        hours = ` ${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = ` ${minutes}`;
    }

    return (
        <div>
            <em>Today is</em>  {hours}:{minutes} | {day}  {month} {datenow}, {year}
        </div>
    );
}
