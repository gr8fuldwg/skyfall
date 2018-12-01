import React from 'react';
import format from 'date-fns/format';

const singleHour = hour => {
    const date = new Date(hour.time * 1000)
    return (
        <p key={hour.time}>
            {format(date, ' h:00a ')}
            {hour.apparentTemperature.toFixed(0)}&deg;
        </p>
    )
}


function HourlyWeather(props) {
    const { data } = props.data;
    const sixHours = data.slice(0, 6);
    const items = sixHours
        .map(singleHour)
    return (
        <div className="container-fluid">
            <div className="navbar-nav">
                <div className="row">
                    <h1 className="col-1 justify-center"> {items} </h1>
                </div>
            </div>
        </div>
    )
}

export default HourlyWeather;