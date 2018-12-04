import React from 'react';

const singleDay = day => {
    return (

    <h1 key={day.time}>The first day forecast: {day.apparentTemperatureMax}&deg;</h1>
    )
}

function DailyWeather(props) {
    const { data } = props.data;
    const days = data.map(singleDay)
    return (
        <section>{ days }</section>
    )
}

export default DailyWeather;