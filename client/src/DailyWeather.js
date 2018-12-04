import React from 'react';
import format from 'date-fns/format';

const singleDay = day => {
    const date = new Date(day.time * 1000)
    return (
        <p key={day.time}>
        {format(date, ' ddd ')}
        {day.apparentTemperatureMax}&deg;
        <p>{day.summary}</p>

    </p>
    )
}

function DailyWeather(props) {
    const { data } = props.data;
    const days = data.map(singleDay)
    return (
        <p className="App-daily d-flex justify-content-center align-items-center pl-4">{ days }</p>
    )
}

export default DailyWeather;