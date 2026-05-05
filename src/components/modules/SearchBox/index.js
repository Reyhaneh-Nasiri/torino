"use client";
import TourDatePicker from "@/components/atoms/TourDatePicker";
import { useState } from "react";
import styles from "./index.module.css";

const SearchBox = () => {
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = (e) => {
    if (!e.target.value) setIsFocus(true);
  };

  const blurHandler = (e) => {
    if (!e.target.value) setIsFocus(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input type="text" onFocus={focusHandler} onBlur={blurHandler} />
        {!isFocus && (
          <div className={styles.label}>
            <i className="fa-solid fa-location-dot"></i>
            مبدا
          </div>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" onFocus={focusHandler} onBlur={blurHandler} />
        {!isFocus && (
          <div className={styles.label}>
            <i className="fa-solid fa-globe"></i>
            مقصد
          </div>
        )}
      </div>
      <TourDatePicker />
      <button>جستجو</button>
    </div>
  );
};

export default SearchBox;
