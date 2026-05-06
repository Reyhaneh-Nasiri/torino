"use client";
import { useState } from "react";
import styles from "./index.module.css";

const SELECT_TYPE = {
  gender: {
    title: "",
    placeholder: "جنسیت",
    label: "جنسیت",
    options: [
      { id: 2, value: "مرد", name: "male" },
      { id: 3, value: "زن", name: "female" },
    ],
    map: {
      male: "مرد",
      female: "زن",
    },
  },
};

const SelectOption = ({ register, trigger, setValue, type, value }) => {
  const [localValue, setLocalValue] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);

  const selectHandler = (value) => {
    setLocalValue(value);
    setValue("gender", value);
    trigger("gender");
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.select} ${isOpen ? styles.open : null}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          onClick={() => setIsOpen(!isOpen)}
          className={styles.input}
          id="gender"
          {...register("gender")}
          value={localValue || SELECT_TYPE[type].title}
          placeholder={SELECT_TYPE[type].placeholder}
          autoComplete="off"
        />
        <p className={styles.value}>
          {SELECT_TYPE[type].map[localValue] || SELECT_TYPE[type].title}
        </p>

        <i className={`fa-solid fa-angle-down ${styles.angle}`}></i>
        {isOpen && (
          <ul className={styles.options}>
            <li className={styles.label}>{SELECT_TYPE[type].label}</li>
            {SELECT_TYPE[type].options.map((option) => (
              <li
                key={option.id}
                className={`${styles.option} ${localValue === option.name ? styles.selected : null}`}
                onClick={() => selectHandler(option.name)}
              >
                {option.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SelectOption;
