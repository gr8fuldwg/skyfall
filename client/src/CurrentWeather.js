import React from "react";
import { Icon } from "./helpers";
import format from "date-fns/format";

function CurrentWeather(props) {
  const { apparentTemperature, time, icon } = props.data;
  const { lat, lon } = props;
  const date = new Date(time * 1000);
  const { summary } = props.data;
  const { temperature } = props.data;
  const { precipProbability } = props.data;

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        <div className="col">
          <header className="App-header flex-grow">
            <div className="date bg-secondary d-flex justify-content-center rounded">
              {format(date, "MMM DD")}
            </div>
            <div className="h-100">
              <h3 className="animated fadeInUp lat-lon d-flex justify-content-center">
                Latitude & Longitude:
              </h3>
              <h1 className="animated flip d-flex justify-content-center pb-5">
                {lat.toFixed(2)} {lon.toFixed(2)}
              </h1>
              <div className="col-12 animated pulse infinite d-flex justify-content-center">
                <Icon iconString={icon} />
              </div>
              <h1 className="animated slideInUp temp d-flex justify-content-center pb-4">
                {apparentTemperature.toFixed(0)} &deg;F
              </h1>
              <h3 className="d-flex justify-content-center">
                Real temp {temperature.toFixed(0)}&deg;
              </h3>
              <h1 className="App-header d-flex justify-content-center pb-4">
                {" "}
                {summary}{" "}
              </h1>
              <h1 className="App-header precip d-flex justify-content-center pb-4">
                Chance of rain is {precipProbability}%
              </h1>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
