import React from 'react';
import format from 'date-fns/format';
import { renderIcon } from './helpers';

const singleDay = day => {
    const date = new Date(day.time * 1000)

    return (
        <section className="pt-3 pb-3 " key={day.time}>
            <div className="card-group animated rotateIn rounded-5 ">
                <div className="card bg-dark text-white">
                    <h1 className="App-daily-day animated flipInX d-flex justify-content-center">{format(date, ' ddd ')}</h1>
                    <small className="card-img-top animated pulse infinite d-flex justify-content-center">{renderIcon(day.icon)}</small>
                    <div className="card-body">
                        <p className="d-flex justify-content-center animated flipInY delay-1s">
                            Low of {day.apparentTemperatureLow.toFixed(0)}&deg; High of {day.apparentTemperatureMax.toFixed(0)}&deg;</p>
                        <div className="card-footer bg-secondary rounded">
                            <p className="card-text animated fadeIn delay-1s summary text-black">{day.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function DailyWeather(props) {
    const { data } = props.data;

    const days = data.map(singleDay)
    return (
        <div>
            <section className="App-daily pl-4">{days}</section>
        </div>
    )
}

export default DailyWeather;