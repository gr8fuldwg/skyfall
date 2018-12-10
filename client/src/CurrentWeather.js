import React from 'react';
import WeatherIcons from 'react-weathericons';
import format from 'date-fns/format';



function renderIcon(iconString) {
    if(iconString === 'cloudy'){
        return <WeatherIcons name="cloud" size="5x" />
    }
    else if(iconString === 'clear-night'){
        return <WeatherIcons name="night-clear" size="5x" />
    }
    else if(iconString === 'clear-day'){
        return <WeatherIcons name="day-sunny" size="5x" />
    }
    else if(iconString === 'rain'){
        return <WeatherIcons name="rain" size="5x" />
    }
    else if(iconString === 'snow'){
        return <WeatherIcons name="snow" size="5x" />
    }
    else if(iconString === 'sleet'){
        return <WeatherIcons name="sleet" size="5x" />
    }
    else if(iconString === 'fog'){
        return <WeatherIcons name="fog" size="5x" />
    }
    else if(iconString === 'parly-cloudy-night'){
        return <WeatherIcons name="night-partly-cloudy" size="5x" />
    }
        else {
        return <WeatherIcons name="windy" size="5x" />
    }
}

function CurrentWeather(props) {
    const { apparentTemperature, time, icon } = props.data
    const { lat, lon } = props
    const date = new Date(time * 1000)
    const { summary } = props.data
    const { temperature } = props.data
    const { precipProbability } = props.data;

    
    


    return (
        <div className="containe-fluid">
            <div className="row">
                <div className="col">
                    <header className="App-header flex-grow">
                        <h1 className="pl-4 pt-4">{format(date, 'MMM DD')}</h1>

                        <div className="h-100">
                            <h3 className="animated fadeInUp lat-lon d-flex justify-content-center">Latitude & Longitude:</h3>
                            <h1 className="animated flip d-flex justify-content-center pb-5">{lat.toFixed(2)} {lon.toFixed(2)}</h1>
                            <div className="col-12 animated fadeInRight slower d-flex justify-content-center">
                                <WeatherIcons className=" pb-4" name="clear" />
                                {renderIcon(icon)}
                            </div>
                            <h1 className="animated slideInUp temp d-flex justify-content-center pb-4">{apparentTemperature.toFixed(0)} &deg;F</h1>
                            <h3 className="d-flex justify-content-center">Real temp {temperature.toFixed(0)} &deg;</h3>
                            <h1 className="App-header d-flex justify-content-center pb-4">  {summary}</h1>
                            <h1 className="App-header d-flex justify-content-center pb-4">Chance of rain is {precipProbability}%</h1>
                        </div>
                    </header>
                </div>
            </div>
        </div>

    )
}



export default CurrentWeather;