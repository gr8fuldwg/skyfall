import React from 'react';
import { renderIcon } from './helpers';
import format from 'date-fns/format';

const singleHour = hour => {
    const date = new Date(hour.time * 1000)
    return (
        <div>
            <div key={hour.time}>
                {format(date, ' ha ')}
                {hour.apparentTemperature.toFixed(0)}&deg;
                <span className="hour-icon animated pulse infinite slow flipInX delay-2s pl-4">{renderIcon(hour.icon)}</span>
            </div>
            <div className="App-hour-summary animated fadeInLeft delay-2s pl-4">{hour.summary}</div>
        </div>
    )
}

function HourlyWeather(props) {
    const { data } = props.data;
    const sixHours = data.slice(0, 6);
    const items = sixHours.map(singleHour)

    return (
        <div className="navbar-nav App-hourly container-fluid bg-dark pl-4">
            <div className="nav">
                <h1 className="App-hourly animated fadeInRight"> {items} </h1>
            </div>
        </div>
    )
}

export default HourlyWeather;
