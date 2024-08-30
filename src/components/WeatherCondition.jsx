import React, { useContext } from "react";
import { WeatherContext } from "../context";
function WeatherCondition() {
      const {weatherData} = useContext(WeatherContext);
      
      const {maxtemp,mintemp,humidity,cloudPercentage,wind} =weatherData;
  return (
    <div className="col-lg-7 p-5">
      <h3 className="mb-3 py-2 text-uppercase d-flex justify-content-center border-bottom">
        thunderstrome with light drizzle
      </h3>
      <ul>
        <li className="list-unstyled mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h4 className="fs-5">Max-Temparature</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
              <h4 className="fs-5">{maxtemp}°</h4>
              
            </div>
          </div>
        </li>
        <li className="list-unstyled mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h4 className="fs-5">Min-Temparature</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
              <h4 className="fs-5">{ mintemp}°</h4>
              
            </div>
          </div>
        </li>
        <li className="list-unstyled mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h4 className="fs-5">Humadity</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
              <h4 className="fs-5">{humidity}</h4>
              
            </div>
          </div>
        </li>
        <li className="list-unstyled mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h4 className="fs-5">Cloudy</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
              <h4 className="fs-5">{cloudPercentage}%</h4>
              
            </div>
          </div>
        </li>
        <li className="list-unstyled mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h4 className="fs-5">Wind</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
              <h4 className="fs-5">{wind}km/h</h4>
              
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WeatherCondition;
