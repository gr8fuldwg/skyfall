import React from 'react';
import format from 'date-fns/format';

const singleDay = day => {
    const date = new Date(day.time * 1000)
    return (
        <p key={day.time}>
            {format(date, ' ddd ')}
            {day.apparentTemperatureMax.toFixed(1)}&deg;
            <span className="summary pl-4">{day.summary}</span>
        </p>
    )
}

function DailyWeather(props) {
    const { data } = props.data;
    const days = data.map(singleDay)
    return (
        <p className="App-daily pl-4">{days}</p>
    )
}

export default DailyWeather;