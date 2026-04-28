"use client";
import place1 from "@/assets/images/place1.png";
import place2 from "@/assets/images/place2.png";
import place3 from "@/assets/images/place3.png";
import place4 from "@/assets/images/place4.png";
import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";

const SLIDES = [
  <Image src={place1} key="1" alt="place 1" />,
  <Image src={place2} key="2" alt="place 2" />,
  <Image src={place3} key="3" alt="place 3" />,
  <Image src={place4} key="4" alt="place 4" />,
];
const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const nextHandler = () => {
    const s = SLIDES.splice(0, 1);
    SLIDES.push(...s);
    setCurrentSlide((curr) => curr + 1);
    if (currentSlide === SLIDES.length) setCurrentSlide(1);
  };
  const prevHandler = () => {
    const s = SLIDES.splice(-1);
    SLIDES.unshift(...s);
    setCurrentSlide((curr) => curr - 1);
    if (currentSlide === 1) setCurrentSlide(SLIDES.length);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <div className={styles.polygon}>؟</div> چرا <span>تورینو</span>؟
      </h2>
      <div className={styles.slider}>
        <div className={styles.images}>{SLIDES.map((slide) => slide)}</div>
        <div className={styles.actions}>
          <i className="fa-solid fa-arrow-right" onClick={prevHandler}></i>
          <p>4 / {currentSlide}</p>
          <i className="fa-solid fa-arrow-left" onClick={nextHandler}></i>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
