import React from 'react';
import format from 'date-fns/format';
import { Icon } from './helpers';

const singleDay = day => {
    const date = new Date(day.time * 1000);
    return (
        <div className="card bg-dark text-white w-25 m-3">
            <h5 className="App-daily-day card-title d-flex justify-content-center animated flipInX ">{format(date, 'ddd')}</h5>
            <Icon className="card-img-top d-flex justify-content-center animated pulse infinite" iconString={day.icon} />
            <div className="card-body">
                <p className="hi-lo card-text animated flipInY delay-1s">
                    Low of {day.apparentTemperatureLow.toFixed(0)}&deg; High of {day.apparentTemperatureMax.toFixed(0)}&deg;
                </p>
            </div>
            <div className="pl-3 pr-3 pb-2 h-35">
                <div className="card-footer pl-4 pb-4  bg-secondary rounded">
                    <p className="card-text d-flex justify-content-center animated fadeIn delay-1s summary text-black rounded text-black pb-2">{day.summary}</p>
                </div>
            </div>
        </div>
    )
    // return (

    //     <div className="card bg-dark text-white m-3" key={day.time}>
    //         <h1 className=" animated flipInX ">{format(date, ' ddd ')}</h1>
    //         <small className="card-img-top  ">{renderIcon(day.icon)}</small>
    //         <div className="card-body">
    //             <p className=" animated flipInY delay-1s">
    //                 Low of {day.apparentTemperatureLow.toFixed(0)}&deg; High of {day.apparentTemperatureMax.toFixed(0)}&deg;</p>
    //             <div className="card-footer bg-secondary rounded">
    //                 <p className="card-text ">{day.summary}</p>
    //             </div>
    //         </div>
    //     </div>

    // )
}


function DailyWeather(props) {
    const { data } = props.data;

    const days = data.map(singleDay)
    return (
        <div>
            <section className="App-daily card-group animated rotateIn rounded-5 pt-2 position-relative">
                {days}
            </section>
        </div>
    )
}

export default DailyWeather;