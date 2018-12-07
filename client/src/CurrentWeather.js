import React from 'react';
import WeatherIcons from 'react-weathericons';
import format from 'date-fns/format';

// const singleHour = hour =>
//     <p key={hour.time}>
//         Temperature: {hour.apparentTemperature}&deg;
//         Time: {new Date(hour.time * 1000).toString()}
//     </p>

function renderIcon(iconString) {
    if(iconString === 'cloudy'){
        return <WeatherIcons name="cloud" size="2x" />
    }
    else if(iconString === 'clear-night'){
        return <WeatherIcons name="night-clear" size="2x" />
    }
    else if(iconString === 'clear-day'){
        return <WeatherIcons name="day-sunny" size="2x" />
    }
    else if(iconString === 'rain'){
        return <WeatherIcons name="rain" size="2x" />
    }
    else if(iconString === 'snow'){
        return <WeatherIcons name="snow" size="2x" />
    }
    else if(iconString === 'sleet'){
        return <WeatherIcons name="sleet" size="2x" />
    }
    else {
        return <WeatherIcons name="windy" size="2x" />
    }
}

    // wind, fog, cloudy, 
    // partly-cloudy-day, or partly-cloudy-night


function CurrentWeather(props) {
    const { apparentTemperature, time, icon } = props.data
    const { lat, lon } = props
    const date = new Date(time * 1000)
    const { summary } = props.data
    const { temperature } = props.data

    
    


    return (
        <div className="containe-fluid">
            <div className="row">
                <div className="col">
                    <header className="App-header flex-grow">
                        <h1 className="pl-4 pt-4">{format(date, 'MMM DD')}</h1>

                        <div className="h-100">
                            <h3 className="animated fadeInUp lat-lon d-flex justify-content-center">Latitude & Longitude:</h3>
                            <h1 className="animated flip d-flex justify-content-center pb-5">{lat.toFixed(2)} {lon.toFixed(2)}</h1>
                            <div className="col-7">
                                <WeatherIcons className="animated fadeInRight d-flex justify-content-end pb-4 mr-5" name="clear" size="5x" />
                                {renderIcon(icon)}
                            </div>
                            <h1 className="animated slideInUp temp d-flex justify-content-center pb-4">{apparentTemperature.toFixed(0)} &deg;F</h1>
                            <h3 className="d-flex justify-content-center">Real temp {temperature.toFixed(0)} &deg;</h3>
                            <h1 className="App-header d-flex justify-content-center pb-4">  {summary}</h1>
                        </div>
                    </header>
                </div>
            </div>
        </div>

    )
}



export default CurrentWeather;