import React, { useContext } from "react";
import "./WeatherBoard.css";

import WeatherHeader from "../WeatherHeader";
import WeatherHeadline from "../WeatherHeadline";
import WeatherCondition from "../WeatherCondition";
import { WeatherContext } from "../../context";
function WeatherBoard() {
  const {loading} =useContext(WeatherContext);
  
  return (
    <section className="weatherboard">
      {
        loading.state?
        (<h1>{loading.message}</h1>):
        (
          <div className="container weather-wrapper">
          <WeatherHeader />
                <div className="row">
                  <WeatherHeadline />
                  <WeatherCondition />
                </div>
          </div>
        )
      }


    </section>
  );
}

export default WeatherBoard;
