import React from 'react';
// import WeatherIcons from 'react-weathericons';
import format from 'date-fns/format';


// function renderIcon(iconString) {
//     if (iconString === 'cloudy') {
//         return <WeatherIcons name="cloud" size="5x" />
//     }
//     else if (iconString === 'clear-night') {
//         return <WeatherIcons name="night-clear" size="5x" />
//     }
//     else if (iconString === 'clear-day') {
//         return <WeatherIcons name="day-sunny" size="5x" />
//     }
//     else if (iconString === 'rain') {
//         return <WeatherIcons name="rain" size="5x" />
//     }
//     else if (iconString === 'snow') {
//         return <WeatherIcons name="snow" size="5x" />
//     }
//     else if (iconString === 'sleet') {
//         return <WeatherIcons name="sleet" size="5x" />
//     }
//     else if (iconString === 'fog') {
//         return <WeatherIcons name="fog" size="5x" />
//     }
//     else if (iconString === 'parly-cloudy-night') {
//         return <WeatherIcons name="night-partly-cloudy" size="5x" />
//     }
//     else {
//         return <WeatherIcons name="sunny" size="5x" />
//     }
// }


const singleHour = hour => {
    const date = new Date(hour.time * 1000)
    return (
        <div>
            <div key={hour.time}>
                {format(date, ' ha ')}
                {hour.apparentTemperature.toFixed(0)}&deg;</div>
            <div className="App-hour-summary">{hour.summary}</div>
        </div>
    )
}


function HourlyWeather(props) {
    const { data } = props.data;
    const sixHours = data.slice(0, 6);
    const items = sixHours.map(singleHour)

    return (
        <div className="navbar-nav App-hourly container-fluid bg-dark">
            <div className="nav">
                <h1 className="App-hourly animated fadeInRight"> {items} </h1>
            </div>
        </div>
    )
}

export default HourlyWeather;
