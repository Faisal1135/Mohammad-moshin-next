import React from "react";
import { Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";
import s from "./CaroSlider.module.css";
import { fromLeftFade, staggerContainer } from "../Header/Header";
const Caroslider = () => {
  return (
    <div className="bg-secondary bg-gradient bg-opacity-10 mt-4">
      <div className="container p-5 ">
        <div className="row">
          <motion.div
            className="col"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2
              className="display-6 text-center fw-bold mb-4 text-info"
              variants={fromLeftFade()}
            >
              Achivements & Rewards
            </motion.h2>
            <motion.p
              className="lead text-muted"
              variants={fromLeftFade("right")}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              suscipit. Possimus autem accusamus modi est tempore molestiae eos
              dolor molestias quod necessitatibus minus, perferendis suscipit
              saepe porro sint, dolorem quibusdam!
            </motion.p>
          </motion.div>
        </div>
        <div className="row mt-4">
          <div className={s.caro_img}>
            <Carousel variant="dark">
              <Carousel.Item>
                <Image
                  className={`d-block ratio ratio-16x9`}
                  src="/images/10L.jpg"
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
                  className="d-block ratio ratio-16x9"
                  src="/images/flag.jpg"
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
                  className="d-block ratio ratio-16x9"
                  src="/images/m1.jpg"
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
