import React, { useContext } from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { WeatherContext } from "../context";
import { getFormatedData } from "../utils/date-utils";
function WeatherHeadline() {
  const {weatherData} = useContext(WeatherContext);
  return (
    <div className="col-lg-5 d-flex flex-column gap-4 p-5">
      <div className="weather-icon">
        <TiWeatherDownpour />
      </div>
      <div className="temparature">
        <h1>{weatherData.temp}°</h1>
      </div>
      <div className="location d-flex">
        <h1 className="d-flex align-items-center">
          <CiLocationOn />
        </h1>
        <h3 className="d-flex justify-content-center align-items-center">
          {weatherData.location}
        </h3>
      </div>
      <div className="date-time">
        <h5>{getFormatedData(weatherData.time,"time",false)}-{getFormatedData(weatherData.time,"date",false)}</h5>
      </div>
    </div>
  );
}

export default WeatherHeadline;
