import React from 'react';

const singleHour = hour => 
    <p key={hour.time}>
        Temperature: {hour.apparentTemperature}&deg;
        Time: {new Date(hour.time * 1000).toString()}
        </p>

function HourlyWeather(props) {
    const { data } = props.data;
    const threeHours = data.slice(0, 3);
    const items = threeHours
        .map(singleHour)
    return (
        <div>
            {items}
        </div>
    )
}

export default HourlyWeather;