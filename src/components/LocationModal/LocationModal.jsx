import React from 'react'
import './LocationModal.css'
function LocationModal() {
  return (
    <div className="favouritemodal">
        <h2 className='fs-5 mb-3'>Favourite Locations</h2>
        <ul className='list-unstyled d-flex flex-column gap-3'>
            <li>Dhaka</li>
            <li>London</li>
            <li>Europe</li>
        </ul>
    </div>
  )
}

export default LocationModal