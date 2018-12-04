import React from 'react';
import format from 'date-fns/format';

const singleDay = day => {
    const date = new Date(day.time * 1000)
    return (
        <h1 key={day.time}>
        {format(date, ' ddd ')}
        {day.apparentTemperatureMax}&deg;

    </h1>
    )
}

function DailyWeather(props) {
    const { data } = props.data;
    const days = data.map(singleDay)
    return (
        <section>{days}</section>
    )
}

export default DailyWeather;