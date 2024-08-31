import React from 'react'
import { TiWeatherDownpour } from "react-icons/ti";
function WeatherLogo() {
  return (
    <div className="col-lg-5">
    <div className="logo w-100 fw-light text-uppercase d-flex align-items-center">
      <div className="weather-icon">
        <TiWeatherDownpour className="fs-2" />
      </div>
      <h3 className="fs-4 ms-3 d-flex justify-content-center align-items-center">weather DhasBoard</h3>
    </div>
  </div>
  )
}

export default WeatherLogo