import React from "react";
function FavLocation({setShowModal}) {
  return (
    <div className="col-lg-6 ">
      <h3  className="w-100 fs-5 d-flex justify-content-end px-sm-3  text-muted text-capitalize">
        <a className="btn btn-outline-info" onClick={setShowModal}>Favourite Locations</a>
      </h3>
    </div>
  );
}

export default FavLocation;
