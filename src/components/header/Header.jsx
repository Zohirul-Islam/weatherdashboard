import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { TiWeatherDownpour } from "react-icons/ti";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row py-4 justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="logo w-100 fw-light text-uppercase d-flex align-items-center">
              <div className="weather-icon">
                <TiWeatherDownpour className="fs-2" />
              </div>
              <h3 className="fs-4 ms-3 d-flex justify-content-center align-items-center">weather DhasBoard</h3>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <form className="w-100 position-relative">
                  <input className="w-100 border-1 p-2 rounded" type="text" />
                  <button className="btn position-absolute search-icon-header">
                    <FaSearch />
                  </button>
                </form>
              </div>
              <div className="col-lg-6">
                <h3 className="w-100 fs-5 d-flex justify-content-end px-3 text-muted text-capitalize">
                  Favourite Locations
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
