import React, { useContext, useEffect, useState } from "react";
import heart from '../assets/heart1.jpg';
import blackheart from '../assets/blackheart.jpg';
import { FavouriteContext,WeatherContext } from "../context";
function WeatherHeader() {
  const {favourites,addToFavourite,removeFromFav} = useContext(FavouriteContext);
  const {weatherData} = useContext(WeatherContext);
 const {location,longitude,latitude} = weatherData
  const [favourite,toggleFavourite] =useState(false);


  useEffect(()=>{
    const found = favourites.find((item)=>item.location === location);
    toggleFavourite(found);
  },[])
  function handleFavourite(){
    const found = favourites.find((item)=>item.location === location);
    if(!found){
      addToFavourite(latitude,longitude,location);
    }else{
      removeFromFav(location)
    }
    toggleFavourite(!favourite);
  }
  return (
    <div className="header d-flex justify-content-end align-items-center py-2 px-4">
      <a onClick={handleFavourite} className="btn btn-primary text-white">Add To Favourite
      <img src={favourite?heart:blackheart} alt="" className="img-fluid ms-2" style={{width:"30px",height:"30px",backgroundColor:'none'}} />
      </a>
    </div>
  );
}

export default WeatherHeader;
