import React, { useState } from "react";
import "./Header.css";
import WeatherLogo from "../WeatherLogo";
import WeatherSearch from "../WeatherSearch";
import FavLocation from "../FavLocation";
import LocationModal from "../LocationModal/LocationModal";

function Header() {
  const [showModal,setShowModal] = useState(false);
  return (
    <header className="shadow mb-5">
      <div className="container">
        <div className="row py-4 justify-content-between align-items-center">
          <WeatherLogo />
          <div className="col-lg-7">
            <div className="row position-relative justify-content-between align-items-center">
              <WeatherSearch />
              <FavLocation setShowModal ={()=>setShowModal(!showModal)}/>
            </div>
            {showModal &&<LocationModal />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
