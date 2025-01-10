// src/components/Slider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css'; // Ensure this file contains necessary styles

function Slider() {
  const imageUrls = [
    'https://loremflickr.com/800/400/burger',
    'https://loremflickr.com/800/400/pizza',
    'https://loremflickr.com/800/400/sushi'
  ];


  return (
    <div className="container-fluid">
      <Carousel className="carousel-fade ">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageUrls[0]}
            alt="First slide"
          />
          <Carousel.Caption>
          <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageUrls[1]}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Some representative placeholder content for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageUrls[2]}
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
