import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Carousel.css";


import car from "./CarList";





const Header = () => {
  

  const UpcomingEvents = car.map((event)=>(
    <Carousel.Item>
        <img src={event.photo} alt="Could not load image"/>
        <Carousel.Caption>
        <h3>{event.title}</h3>
        <h5>{event.date}</h5>
        <h5>{event.time}</h5>
        <p>{event.desc}</p>
        </Carousel.Caption>
        </Carousel.Item>
  ))
  return (
    <Carousel className="header">{UpcomingEvents}</Carousel>
  );
  
};

export default Header;


