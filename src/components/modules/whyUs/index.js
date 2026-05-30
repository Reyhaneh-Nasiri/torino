"use client";
import place1 from "@/assets/images/place1.webp";
import place2 from "@/assets/images/place2.webp";
import place3 from "@/assets/images/place3.webp";
import place4 from "@/assets/images/place4.webp";
import { e2p } from "@/core/utils/digit";
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
    <div className={`${styles.container} content-boxed`}>
      <div className={styles.description}>
        <h2 className={styles.title}>
          <div className={styles.polygon}>؟</div> چرا <span>تورینو</span>؟
        </h2>
        <p>تور طبیعت گردی و تاریخی</p>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className={styles.slider}>
        <div className={styles.images}>
          {SLIDES.map((slide) => slide)}
          <div className={styles.actions}>
            <i className="fa-solid fa-arrow-right" onClick={prevHandler}></i>
            <p>{e2p(`${SLIDES.length} / ${currentSlide}`)}</p>
            <i className="fa-solid fa-arrow-left" onClick={nextHandler}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
