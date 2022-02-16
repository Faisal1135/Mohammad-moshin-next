import React from "react";
import { Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";
import s from "./CaroSlider.module.css";
const Caroslider = () => {
  return (
    <div className="bg-secondary bg-gradient bg-opacity-10">
      <div className="container p-5 ">
        <div className="row">
          <div className={s.caro_img}>
            <Carousel variant="dark">
              <Carousel.Item>
                <Image
                  className={`d-block w-100`}
                  src="https://source.unsplash.com/random"
                  alt="First slide"
                  height="600px"
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block  w-100"
                  src="https://images.unsplash.com/photo-1606926730770-218d179a690e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Second slide"
                  height="600px"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block  w-100"
                  src="https://images.unsplash.com/photo-1606926693780-ec99c3f747f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Third slide"
                  height="600px"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caroslider;
