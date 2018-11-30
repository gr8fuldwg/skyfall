import React from 'react';

const singleHour = hour => 
    <p key={hour.time}>
        Temperature: {hour.apparentTemperature.toFixed(2)}&deg;
        Time: {new Date(hour.time * 1000).toString()}
        </p>

function HourlyWeather(props) {
    const { data } = props.data;
    const sixHours = data.slice(0, 6);
    const items = sixHours
        .map(singleHour)
    return (
        <div className="navbar-nav">
            <h1>{items}</h1>
        </div>
    )
}

export default HourlyWeather;