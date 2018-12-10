import React from 'react';
import axios from 'axios';
import WeatherIcons from 'react-weathericons';

export function fetchWeather(lat, lon) {
    return axios.get(`/forecast/coords/${lat},${lon}`)
        .then(response => {
            return response.data.weather;
        })
}



export function renderIcon(iconString) {
    if(iconString === 'cloudy'){
        return <WeatherIcons className="cloudy" name="cloud" size="5x" />
    }
    else if(iconString === 'clear-night'){
        return <WeatherIcons className="night-clear" name="night-clear" size="5x" />
    }
    else if(iconString === 'clear-day'){
        return <WeatherIcons className="clear-day" name="day-sunny" size="5x" />
    }
    else if(iconString === 'rain'){
        return <WeatherIcons className="rain" name="rain" size="5x" />
    }
    else if(iconString === 'snow'){
        return <WeatherIcons className="snow" name="snow" size="5x" />
    }
    else if(iconString === 'sleet'){
        return <WeatherIcons className="sleet" name="sleet" size="5x" />
    }
    else if(iconString === 'fog'){
        return <WeatherIcons className="fog" name="fog" size="5x" />
    }
    else if(iconString === 'partly-cloudy-night'){
        return <WeatherIcons className="partly-cloudy-night" name="night-partly-cloudy" size="5x" />
    }
        else {
        return <WeatherIcons className="windy" name="windy" size="5x" />
    }
}