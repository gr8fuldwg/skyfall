import React from 'react';
import format from 'date-fns/format';

const singleDay = day => {
    const date = new Date(day.time * 1000)
    return (
        <section key={day.time}>
            <span className="App-daily-day">{format(date, ' ddd ')}</span>
            {day.apparentTemperatureMax.toFixed(1)}&deg;
            <div className="animated fadeIn delay-1s  summary pl-4">{day.summary}</div>
        </section>
    )
}

function DailyWeather(props) {
    const { data } = props.data;
    const days = data.map(singleDay)
    return (
        <section className="App-daily pl-4">{days}</section>
    )
}

export default DailyWeather;