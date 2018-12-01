import React from 'react';
import format from 'date-fns/format';

const singleHour = hour => {
    const date = new Date(hour.time * 1000)
    return(
<p key={hour.time}>
        {hour.apparentTemperature.toFixed(2)}&deg;
        {format(date, 'h:00 a')}
        </p>
    )
}
    

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