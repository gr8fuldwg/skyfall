import React from 'react';

const singleDay = day => {
    return (
    <h1>The first day forecast: {day.apparentTemperatureMax}&deg;</h1>
    )
}

function DailyWeather(props) {
    const { data } = props.data;
    const days = data.map(singleDay)
    return (
        <h3>{ days }</h3>
    )
}

export default DailyWeather;