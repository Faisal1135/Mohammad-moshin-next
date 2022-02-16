import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { fromLeftFade, staggerContainer } from "../Header/Header";
import s from "./About.module.css";

const About = () => {
  return (
    <div className=" py-4 ">
      <div className="container">
        <div className="row">
          <motion.div
            variants={fromLeftFade("left", 200, 2)}
            whileInView="animate"
            initial="initial"
            className="col-md-6"
          >
            <h2 className="display-6">Mohammad Moshin PPM</h2>
            <p className="lead text-muted">
              {
                'Mohmmad Mohsin" is publicly known as "Mohammad Mohsin PPM" in Bengali "মোহাম্মদ মহসীন পিপিএম" is Inspector at Bangladesh Police who is well-known for doing social works and become a public figure. He is the founder of " Hello OC" which provides 24/7 services to the common people. Now he is working as Officer Incharge at Chuadanga Police Station, Chuadanga.&hellip;'
              }
            </p>
          </motion.div>
          <motion.div className="col-md-6">
            <motion.div
              variants={fromLeftFade("right", 200, 2)}
              whileInView="animate"
              initial="initial"
            >
              <Image
                src="/images/logo.jpg"
                alt="logo Image"
                height="300px"
                width="400px"
                className="img-fluid"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const AboutItem = () => {
  return (
    <div className="bg-info bg-opacity-10">
      <div className="py-5 m-5">
        <div className="container">
          <motion.div
            className="row featurette"
            variants={staggerContainer}
            whileInView="animate"
            initial="initial"
          >
            <div className="col-md-7">
              <motion.h2
                className="featurette-heading"
                variants={fromLeftFade("left", 200, 2)}
              >
                Mohammad Moshin <span className="text-muted">PPM.</span>
              </motion.h2>
              <motion.p
                className="lead"
                variants={fromLeftFade("right", 200, 2)}
              >
                {
                  'Mohmmad Mohsin" is publicly known as "Mohammad Mohsin PPM" in Bengali "মোহাম্মদ মহসীন পিপিএম" is Inspector at Bangladesh Police who is well-known for doing social works and become a public figure. He is the founder of " Hello OC" which provides 24/7 services to the common people. Now he is working as Officer Incharge at Chuadanga Police Station, Chuadanga.&hellip;'
                }
              </motion.p>
            </div>
            <motion.div className="col-md-5" variants={fromLeftFade()}>
              <Image
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="800"
                height="500"
                src="/images/about.png"
                alt="about.png"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const recentPostVarient: Variants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const RecentPost = () => {
  return (
    <motion.div
      className="bg-success bg-opacity-10"
      variants={staggerContainer}
      whileInView="animate"
      initial="initial"
    >
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Recent Posts</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <motion.div className="col" variants={recentPostVarient}>
            <div
              className={` card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg  `}
              style={{
                backgroundImage: `url(${"https://firebasestorage.googleapis.com/v0/b/mohmad-moshsin.appspot.com/o/images%2F251648361_991716388226038_60699920385879068_n.jpg?alt=media&token=02daa629-6430-4874-8fb8-057fb8ca32c3"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ">
                  <div className="bg-dark bg-opacity-25">
                    যে থানায় স্বাগত জানানো হয় গোলাপ ফুলে,
                  </div>
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    {/* <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    /> */}
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>Social Media</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div className="col" variants={recentPostVarient}>
            <div
              className={` card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg   `}
              style={{
                backgroundImage: `url(${"https://firebasestorage.googleapis.com/v0/b/mohmad-moshsin.appspot.com/o/images%2FFB_IMG_1643895677331.jpg?alt=media&token=b79a02d4-dfad-4635-9411-84b7a885ee02"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  উচ্চশিক্ষার সুযোগ
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    {/* <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    /> */}
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>Police Activity</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div className="col" variants={recentPostVarient}>
            <div
              className={` card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg `}
              style={{
                backgroundImage: `url(${"https://source.unsplash.com/random"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    {/* <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    /> */}
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small className="bg-dark bg-opacity-50">Award</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
