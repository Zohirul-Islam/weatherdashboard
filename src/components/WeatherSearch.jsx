import React from 'react'
import { FaSearch } from "react-icons/fa";
function WeatherSearch() {
  return (
    <div className="col-lg-6">
    <form className="w-100 position-relative">
      <input className="w-100 border-1 p-2 rounded" type="text" />
      <button className="btn position-absolute search-icon-header">
        <FaSearch />
      </button>
    </form>
  </div>
  )
}

export default WeatherSearch