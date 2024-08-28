import React from "react";
import "./WeatherBoard.css";
import { TiWeatherDownpour } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
function WeatherBoard() {
  return (
    <section className="weatherboard">
      <div className="container weather-wrapper">
        <div className="header d-flex justify-content-end align-items-center py-2 px-4">
          <a className="btn text-white">Add To Favourite</a>
        </div>
        <div className="row">
            <div className="col-lg-5 d-flex flex-column gap-4 p-5">
                <div className="weather-icon">
                    <TiWeatherDownpour/>
                </div>
                <div className="temparature">
                    <h1>16°</h1>
                </div>
                <div className="location d-flex">
                    <h1 className="d-flex align-items-center"><CiLocationOn/></h1>
                    <h3 className="d-flex justify-content-center align-items-center">Dhaka</h3>
                </div>
                <div className="date-time">
                    <h5>Date time</h5>
                </div>
            </div>
            <div className="col-lg-7 p-5">
                <h3 className="mb-3 py-2 text-uppercase d-flex justify-content-center border-bottom">thunderstrome with light drizzle</h3>
                <ul>
                    <li className="list-unstyled mb-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4 className="fs-5">Max-Temparature</h4>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                                <h4 className="fs-5">33°</h4>
                                <h5 className="ms-4">Temp max</h5>
                            </div>
                        </div>
                    </li>
                    <li className="list-unstyled mb-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4 className="fs-5">Min-Temparature</h4>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                                <h4 className="fs-5">33°</h4>
                                <h5 className="ms-4">Temp min</h5>
                            </div>
                        </div>
                    </li>
                    <li className="list-unstyled mb-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4 className="fs-5">Humadity</h4>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                                <h4 className="fs-5">33°</h4>
                                <h5 className="ms-4">Humadity</h5>
                            </div>
                        </div>
                    </li>
                    <li className="list-unstyled mb-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4 className="fs-5">Cloudy</h4>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                                <h4 className="fs-5">33°</h4>
                                <h5 className="ms-4">Cloudy</h5>
                            </div>
                        </div>
                    </li>
                    <li className="list-unstyled mb-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4 className="fs-5">Wind</h4>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                                <h4 className="fs-5">33°</h4>
                                <h5 className="ms-4">Wind</h5>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherBoard;
