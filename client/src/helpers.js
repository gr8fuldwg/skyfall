import React from 'react';
import axios from 'axios';
import WeatherIcons from 'react-weathericons';

export function fetchWeather(lat, lon) {
    return axios.get(`/forecast/coords/${lat},${lon}`)
        .then(response => {
            return response.data.weather;
        })
}



export function Icon(props) {
    const { iconString, className } = props
    let cs;
    let name;
    if(iconString === 'cloudy'){
        cs = `cloudy ${className}`;
        name = 'cloud';
    } else if(iconString === 'clear-night'){
        cs = `night-clear ${className}`;
        name = 'night-clear';
    } else if(iconString === 'clear-day'){
        cs = `clear-day ${className}`;
        name = 'day-sunny';
    } else if(iconString === 'rain'){
        cs = `rain ${className}`;
        name = 'rain';
    } else if(iconString === 'snow'){
        cs = `snow ${className}`;
        name = 'snow';
    } else if(iconString === 'sleet'){
        cs = `sleet ${className}`;
        name = 'sleet';
    } else if(iconString === 'fog'){
        cs = `fog ${className}`;
        name = 'fog';
    } else if(iconString === 'partly-cloudy-night'){
        cs = `partly-cloudy-night ${className}`;
        name = 'night-partly-cloudy';
    } else {
        cs = `windy ${className}`;
        name = 'windy';
    }
    return <WeatherIcons className={cs} name={name} size="5x" />
}