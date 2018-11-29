import React from 'react';

function CurrentWeather(props) {
    const { apparentTemperature } = props.data
    const { lat, lon } = props
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <header className="App-header flex-grow" >
                        <h3>Date</h3>
                        <div className="h-100">
                            <h3 className="d-flex justify-content-center ">Latitude & Longitude:</h3>
                            <h1 className="d-flex justify-content-center">{lat} {lon}</h1>
                            <h1 className="d-flex justify-content-center">Current Temp: {apparentTemperature} &deg;F</h1>
                        </div>
                    </header>
                </div>
            </div>
        </div>

    )
}



export default CurrentWeather;