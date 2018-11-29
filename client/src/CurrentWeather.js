import React from 'react';

function CurrentWeather(props) {
    const { apparentTemperature } = props.data
    return (

        <header className="App-header flex navbar-nav " >
            <h3>Date</h3>
            <div>
                <h1>Location</h1>

                <h1>The temperature is currently: {apparentTemperature} &deg;F</h1>
            </div>
        </header>

    )
}



export default CurrentWeather;