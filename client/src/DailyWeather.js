import React from 'react';
import format from 'date-fns/format';
import { renderIcon } from './helpers';

const singleDay = day => {
const date = new Date(day.time * 1000)

    return (
        <section key={day.time}>
            <div class="card-group">
                <div class="card">
                    <img class="card-img-top" src=".../10x10/" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <span className="App-daily-day">{format(date, ' ddd ')}</span>
            {day.apparentTemperatureMax.toFixed(0)}&deg;
            {renderIcon(day.icon)}
            <div className="animated fadeIn delay-1s summary text-white pl-4">{day.summary}</div>
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