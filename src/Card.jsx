import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card shadow">
          <div className="overflow">
            <img
              src={props.imgsrc}
              className="card-img-top card-image"
              alt="card img"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.dis}</p>
            <NavLink to="#" className="card-btn">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
