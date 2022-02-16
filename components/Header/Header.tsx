import React from "react";
import s from "./Header.module.css";
import AppBar from "../Head/MyNavbar/AppBar";
import { motion, Variants } from "framer-motion";

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const fromLeftFade: (
  direction?: "left" | "right",
  shiftValue?: number,
  duration?: number
) => Variants = (
  direction: "left" | "right" = "left",
  shiftValue: number = 100,
  duration: number = 1
) => {
  return {
    initial: {
      x: direction === "left" ? -shiftValue : shiftValue,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration,
        type: "spring",
      },
    },
  };
};

export const featureImageScale: Variants = {
  initial: {
    scale: 0.2,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeIn",
    },
  },
};

const Header = () => {
  return (
    <motion.div
      className={s.container}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
    >
      <AppBar />

      <div className={s.content}>
        <motion.h1 className={s.content_h1} variants={fromLeftFade()}>
          Mohammad Moshin <br />{" "}
          <span className="text-center text-muted">PPM </span>
        </motion.h1>
        <motion.p className={s.content_p} variants={fromLeftFade()}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quia
          praesentium magnam id labore in placeat, autem debitis eius libero!
        </motion.p>

        <motion.button
          className={s.content_btn}
          variants={fromLeftFade("right")}
        >
          Read More
        </motion.button>
        <motion.img
          src="/images/cover.png"
          alt="feature_img"
          className={s.feature_img}
          variants={featureImageScale}
          initial="initial"
          animate="animate"
        />
      </div>
    </motion.div>
  );
};

export default Header;
