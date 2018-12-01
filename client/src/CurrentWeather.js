import React from 'react';
import WeatherIcons from 'react-weathericons';
import format from 'date-fns/format';

const singleHour = hour =>
    <p key={hour.time}>
        Temperature: {hour.apparentTemperature}&deg;
        Time: {new Date(hour.time * 1000).toString()}
    </p>

function CurrentWeather(props) {
    const { apparentTemperature, time } = props.data
    const { lat, lon } = props
    const date = new Date(time * 1000)

    return (
        <div className="containe-fluid">
            <div className="row">
                <div className="col">
                    <header className="App-header flex-grow">
                        <h2 className="pl-4 pt-4">{format(date, 'MMM DD')}</h2>
                        <div className="h-100">
                            <h3 className="d-flex justify-content-center">Latitude & Longitude:</h3>
                            <h1 className="d-flex justify-content-center">{lat.toFixed(2)} {lon.toFixed(2)}</h1>
                            <div className="col-7">
                                <WeatherIcons className="d-flex justify-content-end pb-4 mr-5" name="cloud" size="4x" />
                            </div>
                            <h1 className="d-flex justify-content-center pb-4">Current Temp: {apparentTemperature.toFixed(0)} &deg;F</h1>
                        </div>
                    </header>
                </div>
            </div>
        </div>

    )
}



export default CurrentWeather;