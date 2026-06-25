"use client";
import { useOutsideClick } from "@/core/hooks/useOutsideClick";
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

const SelectOption = ({
  register,
  trigger,
  setValue,
  type = "gender",
  value,
}) => {
  const [localValue, setLocalValue] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useOutsideClick(() => setIsOpen(false));

  const selectHandler = (selectedValue) => {
    setLocalValue(selectedValue);
    setValue(type, selectedValue);
    trigger(type);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const currentTypeData = SELECT_TYPE[type] || SELECT_TYPE.gender;

  return (
    <>
      <div
        ref={selectRef}
        className={`${styles.select} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        <input
          className={styles.input}
          id={type}
          {...register(type)}
          value={localValue || currentTypeData.title}
          placeholder={currentTypeData.placeholder}
          autoComplete="off"
          readOnly
        />
        <p className={styles.value}>
          {currentTypeData.map[localValue] || currentTypeData.title}
        </p>

        <i className={`fa-solid fa-angle-down ${styles.angle}`}></i>
        {isOpen && (
          <ul className={styles.options}>
            <li className={styles.label} onClick={(e) => e.stopPropagation()}>
              {currentTypeData.label}
            </li>
            {currentTypeData.options.map((option) => (
              <li
                key={option.id}
                className={`${styles.option} ${localValue === option.name ? styles.selected : ""}`}
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
